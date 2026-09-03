import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import HtmlPage from './pages/HtmlPage';
import CssPage from './pages/CssPage';
import JsPage from './pages/JsPage';
import SqlPage from './pages/SqlPage';
import PhpPage from './pages/PhpPage';
import OrbBackground from './components/OrbBackground';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/js" element={<JsPage />} />
        <Route path="/sql" element={<SqlPage />} />
        <Route path="/php" element={<PhpPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <OrbBackground />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
