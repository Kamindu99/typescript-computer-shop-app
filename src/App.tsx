import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import { Footer, Navbar } from './pages/Common';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
