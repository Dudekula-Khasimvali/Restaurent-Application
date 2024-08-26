import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Fotter.css';

const Fotter = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-section">
          <h5>Contact Details</h5>
          <p>
            <b>
              Tel No: +91234567890<br />
              Email: kvrestaurents143@gmail.com<br />
            </b>
          </p>
        </div>
        <div className="footer-section">
          <h5>Our Addresses</h5>
          <p>
            <b>
              1/2/22/82/49/A, Park View Enclave, Near Andhra Prabha Office,<br />
              Jubilee Hills, Hyderabad, Telangana 500033
            </b>
          </p>
        </div>
        <div className="footer-section">
          <h5>Business Hours</h5>
          <p>
            <b>
              Mon-Sun: 11:00 AM – 11:00 PM
            </b>
          </p>
        </div>
        <div className="footer-social-media">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p><b>&reg; All Rights are reserved</b></p>
      </div>
    </footer>
  );
}

export default Fotter;
