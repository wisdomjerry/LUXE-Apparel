// src/AppRouter.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your page components
import { NewArrivalsPage } from './pages/NewArrivalsPage'; // Import the new page

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Set NewArrivalsPage as the main landing page */}
        <Route path="/Newarrivals" element={<NewArrivalsPage />} />

        {/* You can still keep the old App page on a different path if you want to */}
        {/* <Route path="/home" element={<App />} /> */}
        
      </Routes>
    </Router>
  );
};

export default AppRouter;