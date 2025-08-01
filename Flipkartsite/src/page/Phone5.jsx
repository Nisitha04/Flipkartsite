import React from 'react';
import Navbar from '../components/Navbar';
import pocobann from '../assets/images/pocobann.jpeg';
import vivo from '../assets/images/vivo.jpeg';
import mortorolag85 from '../assets/images/mortorolag85.jpeg';
import mortorolag45 from '../assets/images/mortorolag45.jpeg';
import oppok13 from '../assets/images/oppok13.jpeg';
import pocof75g from '../assets/images/pocof75g.jpeg';
import realmep3 from '../assets/images/realmep3.jpeg';

const Phone5 = () => {
  const products = [
    { src: vivo, title: "Vivo T4 5G", price: "₹20,499*" },
    { src: mortorolag85, title: "Motorola G85 5G", price: "₹17,999*" },
    { src: oppok13, title: "Oppo K13 5G", price: "₹16,499*" },
    { src: realmep3, title: "Realme P3 5G", price: "₹15,999*" },
    { src: mortorolag45, title: "Motorola G45 5G", price: "₹10,999*" },
    { src: pocof75g, title: "POCO F7 5G", price: "₹29,999*" },
    { src: vivo, title: "Vivo T4 4G", price: "₹20,499*" },
    { src: realmep3, title: "Realme P3 5G", price: "₹20,999*" },


  ];

  return (
    <div className="container-fluid px-3">
      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <img src={pocobann} style={{height:'350px',width:'100%'}} className="img-fluid w-100 my-3 rounded" alt="Mobile Deals Banner" />

      {/* Title */}
      <h5 className="mb-4 ">OPPO MOBILES</h5>

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

export default Phone5;