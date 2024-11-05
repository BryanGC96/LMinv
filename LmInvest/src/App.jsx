import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import './App.css'

function App() {
  return(
    <Router>
      {/* La NavBar se mantiene aqui Permanentemente */}
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
