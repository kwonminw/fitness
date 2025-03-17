import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { Eexercise } from './pages/exercise';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/exercise/*' element={<Eexercise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
