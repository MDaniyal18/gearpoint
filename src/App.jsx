/**
 * App.jsx — Root application component with React Router
 *
 * Routes matching gearpointcrm.com navigation:
 *  /          → HomePage
 *  /crm       → CrmPage
 *  /contact   → ContactPage
 *  /order     → OrderPage
 *  /about     → AboutPage
 */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar      from './components/layout/Navbar';
import Footer      from './components/layout/Footer';
import HomePage    from './pages/HomePage';
import CrmPage     from './pages/CrmPage';
import NonProfitsPage from './pages/NonProfitsPage';
import ContactPage from './pages/ContactPage';
import OrderPage   from './pages/OrderPage';
import AboutPage   from './pages/AboutPage';

/** Scroll to top on every route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/"            element={<HomePage       />} />
      <Route path="/crm"         element={<CrmPage        />} />
      <Route path="/non-profits" element={<NonProfitsPage />} />
      <Route path="/contact"     element={<ContactPage    />} />
      <Route path="/order"       element={<OrderPage      />} />
      <Route path="/about"       element={<AboutPage      />} />
      {/* 404 fallback */}
      <Route path="*" element={<HomePage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
