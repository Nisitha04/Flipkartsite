import React from 'react';
import bbanner from '../assets/pictures/bbanner.jpeg';
import electricCycle from '../assets/images/electricCycle.jpeg';
import Stationery from '../assets/images/Stationery.jpeg';
import gearedCycle from '../assets/images/gearedCycle.jpeg';
import actiontoys from '../assets/images/actiontoys.jpeg';
import toys from '../assets/images/toys.jpeg';
import coffee from '../assets/images/coffee.jpeg';
import nonGeared from '../assets/images/nonGeared.jpeg';
import softtoys from '../assets/images/softtoys.jpeg';
import yogamat from '../assets/images/yogamat.jpeg';
import cereal from '../assets/images/cereal.jpeg';

const Beauty = () => {
  const beautyItems = [
    { src: electricCycle, title: "Electric Cycle", offer: "Up to 40% off" },
    { src: Stationery, title: "Top Selling Stationery", offer: "From ₹49*" },
    { src: gearedCycle, title: "Geared Cycles", offer: "Up to 70% off" },
    { src: actiontoys, title: "Best of Action Toys", offer: "From ₹500*" },
    { src: toys, title: "Remote Control Toys", offer: "Up to 80% off" },
    { src: coffee, title: "Coffee Powder", offer: "Up to 80% off" },
    { src: nonGeared, title: "Non-Geared Cycles", offer: "Up to 40% off" },
    { src: softtoys, title: "Soft Toys", offer: "Up to 70% off" },
    { src: yogamat, title: "Yoga Mat", offer: "From ₹284*" },
    { src: cereal, title: "Breakfast Cereal", offer: "From ₹109*" },
  ];

  return (
    <div className="container-fluid px-3">
      {/* Banner */}
      <div className="mt-4">
        <div className="row justify-content-center">
          <div className="col-12 mt-3">
            <img src={bbanner} className="img-fluid w-100 rounded" style={{ height: '350px' }} alt="Banner" />
          </div>
        </div>
      </div>

      {/* Beauty, Food, Toys & More */}
      <div className="mt-4">
        <h5 className="mb-3 fw-bold">Beauty, Food, Toys & More</h5>
        <div className="row g-4">
          {beautyItems.map((item, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="card text-center p-2 h-100">
                <img
                  src={item.src}
                  className="card-img-top"
                  style={{ height: '150px', objectFit: 'contain' }}
                  alt={item.title}
                />
                <div className="card-body p-1">
                  <div className="fw-medium">{item.title}</div>
                  <div className="text-muted small">{item.offer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beauty;