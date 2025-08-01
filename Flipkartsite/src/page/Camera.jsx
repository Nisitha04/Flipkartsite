import React from 'react';
import Navbar from '../components/Navbar';
import camerabann from '../assets/pictures/camerabann.jpg';
import ca1 from '../assets/pictures/ca1.jpeg';
import ca2 from '../assets/pictures/ca2.jpeg';
import ca3 from '../assets/pictures/ca3.jpeg';
import ca4 from '../assets/pictures/ca4.jpeg';
import ca5 from '../assets/pictures/ca5.jpeg';
import ca6 from '../assets/pictures/ca6.jpeg';
import ca7 from '../assets/pictures/ca7.jpeg';
import ca8 from '../assets/pictures/ca8.jpeg';

const Camera = () => {
  const products = [
    { src: ca1, title: "Uphaar by Omg 2022 kid's Digital Camera", price: "₹2,499*" },
    { src: ca2, title: "HomeEye D Magneic Wireless Camera Wifi 1080 HD", price: "₹1,999*" },
    { src: ca3, title: "Sr0 1080 Baby Monitor Auto Tracking for Home Security And Action Camera", price: "₹6,499*" },
    { src: ca4, title: "istylei Gift Gor HD Real pic And Action Camera", price: "₹1,999*" },
    { src: ca5, title: "Clubmall E88 Pro 4K Camera with Wifi FPV", price: "₹1,099*" },
    { src: ca6, title: "SIOVS WIFI SECURITY CAMERA Mini Spy Camera", price: "₹2,999*" },
    { src: ca7, title: "TodFod E88 Pro Drone 4K HD Foldable with camera", price: "₹2,499*" },
    { src: ca8, title: "Dhavit GO PRO Portable Waterproof Action Camera", price: "₹2,999*" },


  ];

  return (
    <div className="container-fluid px-3">
      <Navbar />


      <img src={camerabann} style={{height:'350px',width:'100%'}} className="img-fluid w-100 my-3 rounded" alt="Mobile Deals Banner" />

    
      <strong className="mb-4 ">CAMERA</strong>


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
                <strong className="card-text fw-medium mb-1">{item.title}</strong>
                <strong className="text-muted">From {item.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camera;