import React from 'react';
import './App.css';
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
