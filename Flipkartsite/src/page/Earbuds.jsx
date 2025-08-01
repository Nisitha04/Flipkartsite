import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Earbudabann from '../assets/pictures/Earbudabann.jpg';
import e1 from '../assets/pictures/e1.jpeg';
import e2 from '../assets/pictures/e2.jpeg';
import e3 from '../assets/pictures/e3.jpeg';
import e4 from '../assets/pictures/e4.jpeg';
import e5 from '../assets/pictures/e5.jpeg';
import e6 from '../assets/pictures/e6.jpeg';
import e7 from '../assets/pictures/e7.jpeg';
import e8 from '../assets/pictures/e8.jpeg';

const Earbuds = () => {
  const navigate = useNavigate();

  const products = [
    { id: 'earbuds1', src: e1, title: "Boult Astar with Quad Mic Earbuds", price: "₹2,499*" },
    { id: 'earbuds2', src: e2, title: "TRIGGR Kraken x1 with Battery Display", price: "₹1,999*" },
    { id: 'earbuds3', src: e3, title: "Boult Z60 with 60Hr Battery, Quad Mic", price: "₹1,499*" },
    { id: 'earbuds4', src: e4, title: "Number Super Buds GT M9 Gaming TWS", price: "₹1,999*" },
    { id: 'earbuds5', src: e5, title: "Realme Buds T200x with 25db ANC", price: "₹1,999*" },
    { id: 'earbuds6', src: e6, title: "Mivi Duopods D4, 50hrs Playtime", price: "₹1,999*" },
    { id: 'earbuds7', src: e7, title: "Realme Buds T200 Lite with 12.4mm", price: "₹2,499*" },
    { id: 'earbuds8', src: e8, title: "Realme Buds T310 with 46db ANC special", price: "₹2,999*" },
  ];

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container-fluid px-3">

      <Navbar />

    
      <img src={Earbudabann} style={{ height: '350px', width: '100%' }} className="img-fluid w-100 my-3 rounded" alt="Earbuds Banner" />

      
      <strong className="mb-4 d-block fs-4">EARBUDS</strong>

      <div className="row g-4">
        {products.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div
              className="card h-100"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(item.id)}
            >
              <img
                src={item.src}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'contain' }}
                alt={item.title}
              />
              <div className="card-body text-center">
                <strong className="card-text fw-medium mb-1 d-block">{item.title}</strong>
                <strong className="text-muted">From {item.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earbuds;