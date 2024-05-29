import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Earphones from './pages/Earphones'
import Speakers from './pages/Speakers'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import Modal from './components/Modal'

function App() {
  // useEffect(() => {
  //   document.body.classList.add('overflow-hidden')
  // })

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="app">
      <CartContextProvider>
        <Router>
          <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
          <Navbar handleShowModal={handleShowModal} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path="/:category/:name" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </div>
  )
}

export default App