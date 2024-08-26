import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {
    const { state } = useLocation();
    const { address, paymentMethod, orderType } = state || {};

    return (
        <div className="order-details-container">
            <h2>Order Confirmation</h2>
            <div className="order-details">
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Payment Method:</strong> {paymentMethod}</p>
                <p><strong>Order Type:</strong> {orderType}</p>
            </div>
            <button className="back-to-home-btn" onClick={() => window.location.href = '/'}>
                Back to Home
            </button>
        </div>
    );
}

export default OrderDetails;
