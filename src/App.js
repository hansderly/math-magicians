import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import { Navbar, Calculator } from './components';
import { Home, Quote } from './pages';

const Layout = () => {
  <>
    <Navbar />
    <Outlet />
  </>;
};

const App = () => (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
