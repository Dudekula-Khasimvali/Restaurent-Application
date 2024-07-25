import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0', width: '101%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 30px' }}>
          <div>
            <h5>Contact Details</h5>
            <p>
              <b>
                Tel No: +91234567890<br />
                Email: kvrestaurents143@gmail.com<br />
              </b>
            </p>
          </div>
          <div>
            <h5>Our Addresses</h5>
            <p>
              <b>
                1/2/22/82/49/A, Park View Enclave, Near Andhra Prabha Office, <br />Jubilee Hills, Hyderabad, Telangana 500033
              </b>
            </p>
          </div>
          <div>
            <h5>Business Hours</h5>
            <p>
              <b>
                Mon: 11:00 AM – 11:00 PM<br />
                Tue: 11:00 AM – 11:00 PM<br />
                Wed: 11:00 AM – 11:00 PM<br />
                Thu: 11:00 AM – 11:00 PM<br />
                Fri: 11:00 AM – 11:00 PM<br />
                Sat: 11:00 AM – 11:00 PM<br />
                Sun: 11:00 AM – 11:00 PM
              </b>
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
            <a href="https://facebook.com" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://instagram.com" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://youtube.com" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://twitter.com" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <p><b>&reg; All Rights are reserved</b></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
