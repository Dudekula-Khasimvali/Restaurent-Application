import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './component/rigistration';
import LoginPage from './component/login';
import NonVeg from './component/NonVeg';
import Admin from './component/Admin';
import Veg from './component/Veg';
import Forgotpassword from './component/Forgotpassword';
import Home from './component/Home';
import Seafood from './component/Seafood';
import Cart from './component/Cart';
import Drinks from './component/Drinks';
import Welcomepage from './component/Welcomepage';
import { CartProvider } from './component/CartContext';
import CustomerReview from './component/CustomerReview';

ReactDOM.render(
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<Welcomepage />} />
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/drink" element={<Drinks />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/seafood" element={<Seafood />} />
        <Route path="/update" element={<Forgotpassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/review" element={<CustomerReview />} />
      </Routes>
    </Router>
  </CartProvider>,
  document.getElementById('root')
);

reportWebVitals();
