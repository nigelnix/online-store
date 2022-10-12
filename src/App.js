import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

//style
import 'bootstrap/dist/js/bootstrap.js';
import './style/custom.css';
import Login from './components/body/user/Login';
import Register from './components/body/user/Register';
import Cart from './components/body/order/Cart';
import Profile from './components/body/user/Profile';
import Sale from './components/body/order/Sale';

function App() {
  return (
      <div>
          <Header />

          <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/sale' element={<Sale />} />

          </Routes>
          
          <Footer />
    </div>
  )
}

export default App
