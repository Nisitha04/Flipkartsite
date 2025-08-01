import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
        <div className="container-fluid px-4">
        
          <a onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo} height="50" width="100" alt="Flipkart Logo" />
          </a>

      
          <form className="d-flex mx-auto w-50 position-relative">
            <input
              className="form-control ps-5 rounded-1"
              type="search"
              placeholder="Search for Products, Brands and More"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="gray"
              className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zM6.5 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </form>

    
          <div className="d-flex align-items-center gap-3">

          
            <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
                <path d="M22 11C22 16 19 20 16 20C13 20 10 16 10 11C10 6 12 3 16 3C20 3 22 6 22 11Z" />
                <path d="M4 30H28C28 21 22 20 16 20C10 20 4 21 4 30Z" />
              </svg>
              &nbsp;Login
            </a>

        
            <div onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }} className="text-dark d-flex align-items-center">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
                <path d="M6 6H30L27 19H9" />
                <path d="M27 23H10L5 2H2" />
                <circle cx="25" cy="27" r="2" />
                <circle cx="12" cy="27" r="2" />
              </svg>
              &nbsp;Cart ({cartItems.length})
            </div>

    
            <a href="#" className="text-dark text-decoration-none d-flex align-items-center">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="me-1" viewBox="0 0 16 16">
                <path d="M2.97 1.3a1 1 0 0 1 .76-.3h8.54a1 1 0 
                0 1 .76.3l1.58 1.6a.5.5 0 0 1 .14.35V4a2 
                2 0 0 1-4 0 2 2 0 1 1-4 0 2 2 0 1 
                1-4 0V3a.5.5 0 0 1 .14-.35L2.97 1.3zM0 
                5.5A.5.5 0 0 1 .5 5h15a.5.5 0 0 
                1 .5.5V6a2 2 0 0 1-2 2v5.5a.5.5 
                0 0 1-.5.5h-11a.5.5 0 0 
                1-.5-.5V8a2 2 0 0 1-2-2v-.5z" />
              </svg>
              Become a Seller
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;