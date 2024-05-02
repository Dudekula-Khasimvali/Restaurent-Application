import React from 'react';
import ReactDOM from 'react-dom'; // Corrected ReactDOM import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './component/rigistration';
import LoginPage from './component/login';
import Curdop from './component/data';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App/>} /> {/* Corrected path for the homepage */}
        <Route path="/rigister" element={<RegisterPage/>} /> {/* Updated component prop */}
        <Route path="/login" element={<LoginPage/>} /> {/* Updated component prop */}
        <Route path="/data" element={<Curdop/>} /> {/* Updated component prop */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
