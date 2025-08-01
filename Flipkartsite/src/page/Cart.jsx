import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  
 const getNumericValue = (str) => {
  if (typeof str === 'string') {
    return Number(str.replace(/[₹,*]/g, '').replace(/,/g, ''));
  } else if (typeof str === 'number') {
    return str;
  }
  return 0;
};

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + getNumericValue(item.price) * item.quantity,
    0
  );

  
  const totalOldPrice = cartItems.reduce(
    (total, item) => total + getNumericValue(item.oldPrice) * item.quantity,
    0
  );

  const totalDiscount = totalOldPrice - totalPrice;

  const handlePlaceOrder = () => {
    navigate('/delivery');
  };

  return (
    <div className="container-fluid px-3">
      {/* Navbar */}
      <Navbar />
    <div className="container mt-4">
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="card mb-3 p-3">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ maxHeight: '80px' }}
                  />
                </div>
                <div className="col-md-4">
                  <h6>{item.title}</h6>
                  <p>
                    <strong>₹{getNumericValue(item.price)}</strong>{' '}
                    <del className="text-muted">₹{getNumericValue(item.oldPrice)}</del>
                  </p>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  <button onClick={() => decreaseQuantity(item)} className="btn btn-outline-secondary me-2">
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)} className="btn btn-outline-secondary ms-2">
                    +
                  </button>
                </div>
                <div className="col-md-3 text-end">
                  <button onClick={() => removeFromCart(item)} className="btn btn-outline-danger">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          
          <div className="card p-3">
            <h5>Price Details</h5>
            <p><strong>Price:</strong> ₹{totalOldPrice}</p>
            <p><strong>Discount:</strong> ₹{totalDiscount}</p>
            <p><strong>Total Amount:</strong> ₹{totalPrice}</p>

            <button className="btn btn-warning w-100 mt-3" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default CartPage;