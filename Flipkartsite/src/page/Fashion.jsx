import React from 'react';
import Navbar from '../components/Navbar';
import banner5 from '../assets/images/banner5.jpeg';
import mt1 from '../assets/pictures/mt1.jpeg';
import mt2 from '../assets/pictures/mt2.jpeg';
import mt3 from '../assets/pictures/mt3.jpeg';
import mt4 from '../assets/pictures/mt4.jpeg';
import mt5 from '../assets/pictures/mt5.jpeg';
import mt6 from '../assets/pictures/mt6.jpeg';
import mt7 from '../assets/pictures/mt7.jpeg';
import mt8 from '../assets/pictures/mt8.jpeg';




const Fashion = () => {
    const products = [
        { src: mt1, title: "VeBNoR ", discount:"Pack of 2 Men printed Route...", price: "₹389*  69% off"},
        { src: mt2, title: "Magneto", discount:"Men Stripped Round Neck...", price: "₹3o6*  61% off"},
        { src: mt3, title: "RODEIZ ", discount:"Men slim fit stripped spread collar cas...", price: "₹289*  75% off"},
        { src: mt4, title: "VeBNoR ", discount:"Men Regular Fit Solid Butt...", price: "₹289*  70% off"},
        { src: mt5, title: "Coofandy ", discount:"Pack of 2 Men printed Round...", price: "₹389*  61% off"},
        { src: mt6, title: "Tripr ", discount:"Pack of 2 Men Solid Route...", price: "₹269*  50% off"},
        { src: mt7, title: "TB Blue ", discount:"Men stripped polo neck printed Round...", price: "₹589*  79% off"},
        { src: mt8, title: "Fasionicity", discount:"Pack Men self Design Round Neck Pure Cott...", price: "₹389*  71% off"},
    
      ];
  return (
<div className="container-fluid px-3">
      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <img src={banner5} className="img-fluid w-100 my-3 rounded" alt="Mobile Deals Banner" />

      {/* Title */}
      <h5 className="mb-4-center" style={{fontsize:'24px'}}>FASHION</h5>

      {/* Grid Layout */}
      <div className="row g-4">
        {products.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100">
              <img
                src={item.src}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'contain' }}
                alt={item.title}
              />
              <div className="card-body text-center">
                <p className="card-text fw-medium mb-1">{item.title}</p>
                <strong className="text-muted">From {item.discount}</strong>
                <strong className="text-muted">From {item.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fashion
