import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DeliveryPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const getNumeric = (str) =>
    typeof str === 'string' ? Number(str.replace(/[₹,*]/g, '').replace(/,/g, '')) : str;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + getNumeric(item.price) * item.quantity,
    0
  );

  const isValid = () =>
    email.trim().endsWith('@gmail.com') &&
    name.trim() !== '' &&
    address.trim() !== '' &&
    payment.trim() !== '';

  const handleDeliver = () => {
    if (isValid()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="container mt-4 text-center">
        <h2>✅ Your Order is Delivered Successfully!</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid px-3">
      {/* Navbar */}
      <Navbar />
    <div className="container mt-4">
      <h2 className="mb-4">Delivery Information</h2>

      <div className="mb-3">
        <label>Email ID (must end with @gmail.com)</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
        />
      </div>

      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Full Name"
        />
      </div>

      <div className="mb-3">
        <label>Address</label>
        <textarea
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Delivery Address"
        ></textarea>
      </div>

      <div className="mb-3">
        <label>Payment Mode</label>
        <select
          className="form-select"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Select Payment Mode</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
        </select>
      </div>

      <div className="mb-4">
        <h5>Products Ordered:</h5>
        {cartItems.map((item, idx) => (
          <div key={idx} className="d-flex align-items-center border p-2 rounded mb-2">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '15px' }}
            />
            <div>
              <strong>{item.title}</strong>
              <p className="mb-0">
                ₹{getNumeric(item.price)} × {item.quantity} = ₹
                {getNumeric(item.price) * item.quantity}
              </p>
            </div>
          </div>
        ))}
        <p className="mt-2"><strong>Total Amount: ₹{totalAmount}</strong></p>
      </div>

      <button
        className="btn btn-success w-100"
        onClick={handleDeliver}
        disabled={!isValid()}
      >
        Deliver
      </button>
    </div>
    </div>
  );
};

export default DeliveryPage;