import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResourceDetails from './pages/ResourceDetailsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';

const App = () => {
  return (
    <div>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource-details" element={<ResourceDetails />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
