import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
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
import Drinks from './component/Drinks';
import Welcomepage from './component/Welcomepage';
import { CartProvider } from './component/CartContext';
import { AuthProvider } from './context/AuthContext';
import CustomerReview from './component/CustomerReview';
import Cart from './component/Cart';
import ProductDetails from './component/ProductDetails';
import Order from './component/Order';
import OrderDetails from './component/OrderDetails';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <AuthProvider>
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
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/review" element={<CustomerReview />} />
          <Route path="/order" element={<Order />} />
          <Route path="/details" element={<OrderDetails />} />
        </Routes>
      </Router>
    </CartProvider>
  </AuthProvider>
);

reportWebVitals();
