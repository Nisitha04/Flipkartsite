import React from 'react';
import Navbar from '../components/Navbar';
import bestbann from '../assets/pictures/bestbann.jpeg';
import be1 from '../assets/pictures/be1.jpeg';
import be2 from '../assets/pictures/be2.jpeg';
import be3 from '../assets/pictures/be3.jpeg';
import be5 from '../assets/pictures/be5.jpeg';
import be6 from '../assets/pictures/be6.jpeg';
import be7 from '../assets/pictures/be7.jpeg';
import be8 from '../assets/pictures/be8.jpeg';

const Bestselling = () => {
  const products = [
    { src: be1, title: "Mivi Play 12HRS Playback,Bass Boosted", price: "₹2,499*" },
    { src: be2, title: "MiviFort H350 Soundbar,350Watts", price: "₹6,999*" },
    { src: be3, title: "boAt Aavante Bar 480 with 7 Hrs Playback", price: "₹7,499*" },
    { src: be5, title: "Mivi ROAM2 24 Hrs Playback Bass Boosted ", price: "₹4,999*" },
    { src: be6, title: "MZ M423SP (Portable Home TV) ", price: "₹8,999*" },
    { src: be7, title: "ZERONICS Astra 40 (PSPK 44) Upto 24Hrs", price: "₹6,499*" },
    { src: be8, title: "Portonics 110w TWS Portable& Type C charging", price: "₹9,999*" },


  ];

  return (
    <div className="container-fluid px-3">

      <Navbar />

      <img src={bestbann} style={{height:'350px',width:'100%'}} className="img-fluid w-100 my-3 rounded" alt="Mobile Deals Banner" />

      <strong className="mb-4 ">BEST SELLING MOBILE STAND</strong>

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

export default Bestselling;