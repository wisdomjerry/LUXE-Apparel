import { useState, useEffect } from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  LogOutIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { useCart } from "../context/CartContext";

export function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart(); // ✅ get cart from context
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [badgeAnimate, setBadgeAnimate] = useState(false); // animation state
  const navigate = useNavigate();

  const navItems = [
    { name: "New Arrivals", path: "/newarrivals" },
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Accessories", path: "/accessories" },
    { name: "Collections", path: "/collections" },
  ];

  // Animate badge when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      setBadgeAnimate(true);
      const timer = setTimeout(() => setBadgeAnimate(false), 300); // 300ms pop
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  // Close search overlay with ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  function handleLogout() {
    logout();       // Clear user from context
    navigate("/");  // Redirect to homepage
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/newarrivals" className="text-2xl font-serif tracking-wider">
              LUXÉ
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              className="text-gray-900 hover:text-gray-600 p-1"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon className="h-5 w-5" />
            </button>

            {/* User */}
            {!user && (
              <Link to="/login" className="text-gray-900 hover:text-gray-600 p-1">
                <UserIcon className="h-5 w-5" />
              </Link>
            )}

            {/* Cart */}
            {user && (
              <Link
                to="/cart"
                className="text-gray-900 hover:text-gray-600 p-1 relative"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                {cart.length > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center transition-transform ${
                      badgeAnimate ? "scale-125" : "scale-100"
                    }`}
                  >
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {/* Logout */}
            {user && (
              <button
                className="text-gray-900 hover:text-gray-600 p-1"
                onClick={handleLogout}
                title="Logout"
              >
                <LogOutIcon className="h-5 w-5" />
              </button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-900 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </Link>
            ))}
            {!user && (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Login
              </Link>
            )}
            {user && (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-32">
          <div className="bg-white w-full max-w-xl mx-4 rounded-lg shadow-lg p-4 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSearchOpen(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>
            <h2 className="text-lg font-semibold mb-3">Search Products</h2>
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
