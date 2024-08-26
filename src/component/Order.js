import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressForm from './AddressForm';

function Order() {
  const [address, setAddress] = useState({
    addressLine1: 'H no 54',
    addressLine2: 'Ghass mandi',
    state: 'UTTAR PRADESH',
    pincode: '251001',
    buildingNameNumber: '',
    streetName: 'MUZAFFARNAGAR'
  });
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery');
  const [upiID, setUpiID] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    productName: 'N/A',
    itemsTotal: 0,
    delivery: 40,
    promotions: 660,
    orderTotal: 0
  });

  const handleOrderSubmit = () => {
    if (!address || !paymentMethod) {
      toast.error('Please enter all details.', { position: 'top-center' });
      return;
    }

    // Additional validation for card number length and format
    if (paymentMethod === 'Credit/Debit Card') {
      if (cardNumber.length !== 12) {
        toast.error('Card number must be exactly 12 digits long.', { position: 'top-center' });
        return;
      }
      if (!/^\d{12}$/.test(cardNumber)) {
        toast.error('Card number must contain only digits.', { position: 'top-center' });
        return;
      }
    }

    // Create order object
    const orderObj = {
      orderDate: new Date().toISOString(),
      totalAmount: orderSummary.orderTotal,
      address: address,
      paymentMethod: paymentMethod,
      items: [
        {
          // Add your product details here
        }
      ]
    };

    // Submit the order (handle this according to your backend)
    console.log(orderObj);
    toast.success('Order placed successfully!', { position: 'top-center' });
  };

  const handleUpiVerification = () => {
    if (!upiID.includes('@')) {
      toast.error('Please enter a valid UPI ID', { position: 'top-center' });
      return;
    }
    toast.success('UPI Verified!', { position: 'top-center' });
  };

  const handleAddressSave = (newAddress) => {
    setAddress(newAddress);
    setShowAddressForm(false);
    toast.success('Address saved successfully!', { position: 'top-center' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <ToastContainer />
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      <hr />
      <div className="row">
        <div className="col-md-8">
          {/* Delivery Address */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5>1. Delivery Address</h5>
              <button className="btn btn-link" style={{ textDecoration: 'none' }} onClick={() => setShowAddressForm(true)}>Change</button>
            </div>
            <div className="card-body">
              <p>{address.addressLine1}, {address.addressLine2}, {address.buildingNameNumber}, {address.streetName}, {address.state}, {address.pincode}</p>
              <button className="btn btn-link" style={{ textDecoration: 'none' }} onClick={() => setShowAddressForm(true)}>+ Add delivery instructions</button>
            </div>
          </div>
          {/* Payment Method */}
          <div className="card mb-3">
            <div className="card-header">
              <h5>2. Select a Payment Method</h5>
            </div>
            <div className="card-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" value="Credit/Debit Card" id="creditCard" onChange={(e) => setPaymentMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit or debit card
                </label>
                {paymentMethod === 'Credit/Debit Card' && (
                  <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter card number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                  </div>
                )}
                <div className="mt-2">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                  <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" />
                  <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="Rupay" />
                </div>
              </div>
              {/* Net Banking */}
              <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="paymentMethod" value="Net Banking" id="netBanking" onChange={(e) => setPaymentMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="netBanking">
                  Net Banking
                </label>
                {paymentMethod === 'Net Banking' && (
                  <select className="form-control mt-2">
                    <option>Choose an Option</option>
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>
                )}
              </div>
              {/* UPI */}
              <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="paymentMethod" value="UPI" id="upi" onChange={(e) => setPaymentMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="upi">
                  Other UPI Apps
                </label>
                {paymentMethod === 'UPI' && (
                  <>
                    <input type="text" className="form-control mt-2" placeholder="Enter UPI ID" value={upiID} onChange={(e) => setUpiID(e.target.value)} />
                    <button className="btn btn-link" style={{ textDecoration: 'none' }} onClick={handleUpiVerification}>Verify</button>
                  </>
                )}
              </div>
              {/* Cash on Delivery */}
              <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="paymentMethod" value="Cash On Delivery" id="cod" defaultChecked onChange={(e) => setPaymentMethod(e.target.value)} />
                <label className="form-check-label" htmlFor="cod">
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Order Summary */}
          <div className="card">
            <div className="card-header">
              <h5>Order Summary</h5>
            </div>
            <div className="card-body">
              <p><strong>{orderSummary.productName}</strong></p>
              <p>Items Total: ₹{orderSummary.itemsTotal}</p>
              <p>Delivery: ₹{orderSummary.delivery}</p>
              <p>Promotions: -₹{orderSummary.promotions}</p>
              <hr />
              <h5>Order Total: ₹{orderSummary.orderTotal}</h5>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-block" onClick={handleOrderSubmit}>Place Order</button>
            </div>
          </div>
        </div>
      </div>
      {/* Show Address Form Modal */}
      {showAddressForm && (
        <AddressForm
          show={showAddressForm}
          onHide={() => setShowAddressForm(false)}
          onSave={handleAddressSave}
          addresses={[]} // Replace with actual address data if needed
        />
      )}
    </div>
  );
}

export default Order;
