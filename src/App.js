import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Quote, Calculator } from './pages';

const App = () => (
  <>
    <Routes>
      <Navbar />
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
