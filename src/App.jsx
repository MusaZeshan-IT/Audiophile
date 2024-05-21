import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/headphones' />
          <Route path='/speakers' />
          <Route path='/earphones' />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App