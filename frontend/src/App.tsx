import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Books } from './components/Books';

import './App.css';
import { BookPage } from './components/BookPage';

function App() {


  return (
    
    <BrowserRouter>
     <Routes>
     <>
      <Route path="/" element={<Books />}></Route>
      <Route path="/book/:id" element={<BookPage />}></Route>
      </>
    </Routes>
    </BrowserRouter>
     
  
  );
}

export default App;
