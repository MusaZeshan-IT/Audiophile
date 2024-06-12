import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import Modal from './components/Common/Modal'
import NavMenuModal from './components/Common/NavMenuModal'
import CategoryPage from './components/CategoryPage/CategoryPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(true)
  };
  const handleCloseMenu = () => {
    setShowMenu(false)
  };

  return (
    <div className="app">
      <CartContextProvider>
        <Router>
          <ToastContainer />
          <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
          <NavMenuModal showMenu={showMenu} handleCloseMenu={handleCloseMenu} handleCloseModal={handleCloseModal} />
          <Navbar showMenu={showMenu} handleShowMenu={handleShowMenu} handleCloseMenu={handleCloseMenu} handleShowModal={handleShowModal} />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/:category' element={<CategoryPage />} />
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