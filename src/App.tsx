import { Routes, Route } from "react-router-dom";
import { NewArrivalsPage } from "./pages/NewArrivalsPage";
import { WomenPage } from "./pages/WomenPage";
import { MenPage } from "./pages/MenPage";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import { LoginPage } from "./pages/LoginPage";
import { CartPage } from "./pages/CartPage";
import Signup from "./pages/Signup";
import { Header } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop as ScrollToTopComponent } from "./components/ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { CheckoutPage } from "./pages/CheckoutPage";


export function App() {
  return (
    <div className="min-h-screen bg-white">
       <AuthProvider>
      
 <Header />
      {/* ScrollToTop will scroll automatically on route change */}
      <ScrollToTopComponent />
      <main>
        <Routes>
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<NewArrivalsPage />} />
          <Route path="/newarrivals" element={<NewArrivalsPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          {/* ✅ Auth & Cart Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
    </div>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



