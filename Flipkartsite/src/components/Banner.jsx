import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import banner1 from '../assets/images/banner1.jpeg';
import banner2 from '../assets/images/banner2.jpeg';
import banner3 from '../assets/images/banner3.jpeg';
import banner4 from '../assets/images/banner4.jpeg';
import banner5 from '../assets/images/banner5.jpeg';
import banner6 from '../assets/images/banner6.jpeg';
import banner7 from '../assets/images/banner7.jpeg';
const Banner = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Offer 1" />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Offer 2" />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="Offer 3" />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block w-100" alt="Offer 4" />
        </div>
        <div className="carousel-item">
          <img src={banner5} className="d-block w-100" alt="Offer 5" />
        </div>
        <div className="carousel-item">
          <img src={banner6} className="d-block w-100" alt="Offer 6" />
        </div>
        <div className="carousel-item">
          <img src={banner7} className="d-block w-100" alt="Offer 7" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;