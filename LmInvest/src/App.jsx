import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import TopBar from './components/TopBar';
import './App.css'

function App() {
  return(
    <Router>
      <TopBar />
      {/* La NavBar se mantiene aqui Permanentemente */}
      <Navbar /> 
      <main style={{ paddingTop: '128px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
