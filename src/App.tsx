import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import { Footer, Navbar } from './pages/Common';
import Desktoppage from './pages/Desktoppage';
import Accessories from './pages/Accessories';
import Software from './pages/Software';
import Laptops from './pages/Laptops';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/desktop'} element={<Desktoppage />} />
        <Route path={'/accessories'} element={<Accessories />} />
        <Route path={'/software'} element={<Software/>} />
        <Route path={'/laptop'} element={<Laptops/>} />
        <Route path={'/cart'} element={<Cart/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
