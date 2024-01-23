// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LazyLoadingPage from './pages/LazyLoadingPage/LazyLoadingPage';
import ResponsiveImagesPage from './pages/ResponsiveImagesPage/ResponsiveImagesPage';
import Navbar from './components/Navbar';
import Home from './pages/HomePage/Home';
import WebP from './pages/WebPPage/WebP';
import ImageKitPage from './pages/ImageKitPage/ImageKitPage';
import SvgImagesPage from './pages/SvgImagesPage/SvgImagesPage';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/lazy-loading" Component={LazyLoadingPage} />
          <Route path="/responsive-images" Component={ResponsiveImagesPage} />
          <Route path="/webp-images" Component={WebP} />
          <Route path="/cdn" Component={ImageKitPage} />
          <Route path="/svg" Component={SvgImagesPage} />
        </Routes>
    </Router>
  );
};

export default App;