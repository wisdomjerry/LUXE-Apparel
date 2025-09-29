import { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  requireAuth: (callback: () => void) => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isLoggedIn = !!user;

  const requireAuth = (callback: () => void) => {
    if (isLoggedIn) callback();
    else window.location.href = "/login"; // or navigate("/login")
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, requireAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Create a custom hook for easier usage
export const useAuth = () => useContext(AuthContext);
