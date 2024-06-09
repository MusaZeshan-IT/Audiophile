import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Earphones from './pages/Earphones'
import Speakers from './pages/Speakers'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Modal from './components/Common/Modal'
import './App.css'
import NavMenuModal from './components/Common/NavMenuModal'

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true)
    console.log('Menu opened');
  };
  const handleCloseMenu = () => {
    setShowMenu(false)
    console.log('Menu closed');
  };

  return (
    <div className="app">
      <CartContextProvider>
        <Router>
          <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
          <NavMenuModal showMenu={showMenu} handleCloseMenu={handleCloseMenu} handleCloseModal={handleCloseModal} />
          <Navbar showMenu={showMenu} handleShowMenu={handleShowMenu} handleCloseMenu={handleCloseMenu} handleShowModal={handleShowModal} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path="/:category/:name" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </CartContextProvider>
    </div>
  )
}

export default App