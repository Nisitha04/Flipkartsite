import React from 'react';
import Navbar from '../components/Navbar';
import watchbann from '../assets/pictures/watchbann.jpg';
import sw1 from '../assets/pictures/sw1.jpeg';
import sw2 from '../assets/pictures/sw2.jpeg';
import sw3 from '../assets/pictures/sw3.jpeg';
import sw4 from '../assets/pictures/sw4.jpeg';
import sw5 from '../assets/pictures/sw5.jpeg';
import sw6 from '../assets/pictures/sw6.jpeg';
import sw7 from '../assets/pictures/sw7.jpeg';
import sw8 from '../assets/pictures/sw8.jpeg';


const Fastsmart = () => {
  const products = [
    { src: sw1, title: "Noise Crew Ge with 1.39 Display", price: "₹2,499*" },
    { src: sw2, title: "Noise Crew 1.38 Round Display eith Bluethtooth", price: "₹1,999*" },
    { src: sw3, title: "Noise Colorfit icon 2.18 Display with Bluetooth Calling", price: "₹1,499*" },
    { src: sw4, title: "Noise Colorfit icon 1.38 Display with Bluetooth Calling", price: "₹1,999*" },
    { src: sw5, title: "Noise Icon 2 Elite Edition 1.8 Display", price: "₹1,999*" },
    { src: sw6, title: "Noise Colorfit icon 2.18 Display with Bluetooth Calling", price: "₹2,999*" },
    { src: sw7, title: "Noise Colorfit icon 2.18 Display with Bluetooth Calling", price: "₹2,499*" },
    { src: sw8, title: "Noise Colorfit icon 2.18 Display with Bluetooth Calling", price: "₹2,999*" },


  ];

  return (
    <div className="container-fluid px-3">
      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <img src={watchbann} style={{height:'350px',width:'100%'}} className="img-fluid w-100 my-3 rounded" alt="Mobile Deals Banner" />

      {/* Title */}
      <strong className="mb-4 ">Smart Watches</strong>

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

export default Fastsmart;