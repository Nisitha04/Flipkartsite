import React from 'react';
import Navbar from '../components/Navbar';
import banner6 from '../assets/images/banner6.jpeg';
import tva1 from '../assets/pictures/tva1.jpeg';
import tva2 from '../assets/pictures/tva2.jpeg';
import tva3 from '../assets/pictures/tva3.jpeg';
import tva4 from '../assets/pictures/tva4.jpeg';
import tva5 from '../assets/pictures/tva5.jpeg';
import tva6 from '../assets/pictures/tva6.jpeg';
import tva7 from '../assets/pictures/tva7.jpeg';
import tva8 from '../assets/pictures/tva8.jpeg';

const Computer = () => {
  const products = [
    { src: tva1, title: "iFFALCON by TCL U65 138cm Ultra HD", price: "₹20,499*" },
    { src: tva2, title: "MOTOROLA 109 cm QLED Ultra HD", price: "₹17,999*" },
    { src: tva3, title: "XIAOMI by Mi Series 108 cm Ultra HD", price: "₹16,499*" },
    { src: tva4, title: "MOTOROLA 140 cm QLED Ultra HD", price: "₹15,999*" },
    { src: tva5, title: "SONY Bravia 2 138.8cm Ultra HD", price: "₹10,999*" },
    { src: tva6, title: "Samsung 189 L Direct Cool Refrigerator", price: "₹29,999*" },
    { src: tva7, title: "IFB 206 L Direct Cool 5 Star Refrigerator", price: "₹20,499*" },
    { src: tva8, title: "realme Techlife 7Kg 5 Star Washing Machine", price: "₹20,999*" },
  ];

  return (
    <div className="container-fluid px-3">
      <Navbar />

      <img
        src={banner6}
        className="img-fluid w-100 my-3 rounded"
        alt="TV & Appliance Deals Banner"
      />

      <h5 className="mb-4">Best Deals on TVs & Appliances</h5>

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
                <p className="card-text fw-bold mb-1">{item.title}</p>
                <strong className="text-muted">From {item.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Computer;