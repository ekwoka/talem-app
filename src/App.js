import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import Extracurriculars from './Pages/Extracurriculars';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
