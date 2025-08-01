import React from 'react';
import Navbar from '../components/Navbar';
import ebanner from '../assets/images/ebanner.jpeg';
import Earbuds from '../assets/images/Earbuds.jpeg';
import mortorolag85 from '../assets/images/mortorolag85.jpeg';
import camera from '../assets/images/camera.jpeg';
import Smartwatch from '../assets/images/Smartwatch.jpeg';
import Bestselling from '../assets/images/Bestselling.jpeg';
import Fasttracksmartwatch from '../assets/images/Fasttracksmartwatch.jpeg';
import viewsonicmonitors from '../assets/images/viewsonicmonitors.jpeg';

const Electronics = () => {
  const products = [
    { src: Earbuds, title: "Earbuds", subtitle: "Grab Now" },
    { src: mortorolag85, title: "Motorola G85 5G", subtitle: "From G85 5G" },
    { src: camera, title: "Top Mirrorless Came...", subtitle: "Shop now!" },
    { src: Smartwatch, title: "Noise Smartwatches", subtitle: "From ₹1,099*" },
    { src: Bestselling, title: "Best Selling Mobile S...", subtitle: "From ₹499*" },
    { src: Fasttracksmartwatch, title: "Fastrack Smartwatc...", subtitle: "From ₹1,399*" },
    { src: viewsonicmonitors, title: "Viewsonic Monitor", subtitle: "From ₹13,999*" },
  ];

  return (
    <div className="container-fluid px-3">
      <Navbar />

      {/* Banner */}
      <img
        src={ebanner}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        className="img-fluid my-3 rounded"
        alt="Electronics Deals Banner"
      />

      {/* Heading */}
      <h5 className="mb-4" style={{ fontSize: '24px' }}>
        <strong className="text-muted">ELECTRONICS</strong>
      </h5>

      {/* Product Grid */}
      <div className="row g-4">
        {products.map((item, idx) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
            <div className="card h-100">
              <img
                src={item.src}
                className="card-img-top"
                style={{ height: '150px', objectFit: 'contain' }}
                alt={item.title}
              />
              <div className="card-body text-center">
                <p className="card-text fw-medium">
                  {item.title}<br />
                  <strong className="text-muted">{item.subtitle}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;