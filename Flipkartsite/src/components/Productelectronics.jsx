import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Earbuds from '../assets/images/Earbuds.jpeg';
import mortorolag85 from '../assets/images/mortorolag85.jpeg';
import camera from '../assets/images/camera.jpeg';
import Smartwatch from '../assets/images/Smartwatch.jpeg';
import Bestselling from '../assets/images/Bestselling.jpeg';
import Fasttracksmartwatch from '../assets/images/Fasttracksmartwatch.jpeg';
import viewsonicmonitors from '../assets/images/viewsonicmonitors.jpeg';

const Productelectronics = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid mt-5">
      <h5 className="mb-3">Best of Electronics</h5>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-3">

              <div className="card me-3" onClick={() => navigate('/Earbuds')} style={{ cursor: 'pointer' }}>
                <img src={Earbuds} className="card-img-top" style={{ minWidth: '200px', height: '150px', objectFit: 'contain' }} alt="Earbuds" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Earbuds<br /><small className="text-muted">Grab Now</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Motorola G85 5G')} style={{ cursor: 'pointer' }} >
                <img src={mortorolag85} className="card-img-top" style={{ minWidth: '200px', height: '150px', objectFit: 'contain' }} alt="Motorola G85" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Motorola G85 5G<br /><small className="text-muted">From G85 5G</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Top Mirrorless Came...')} style={{ cursor: 'pointer' }}>
                <img src={camera} className="card-img-top" style={{ minWidth: '200px', height: '150px', objectFit: 'contain' }} alt="Camera" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Top Mirrorless Came...<br /><small className="text-muted">Shop now!</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Noise SmartWatches')} style={{ cursor: 'pointer' }}>
                <img src={Smartwatch} className="card-img-top" style={{ minWidth: '200px', height: '150px', objectFit: 'contain' }} alt="Smartwatch" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Noise Smartwatches<br /><small className="text-muted">From ₹1,099*</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Best Selling Mobile S...')} style={{ cursor: 'pointer' }}>
                <img src={Bestselling} className="card-img-top" style={{  minWidth: '200px',height: '150px', objectFit: 'contain' }} alt="Best Selling" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Best Selling Mobile S...<br /><small className="text-muted">From ₹499*</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Fastrack Smartwatc...')} style={{ cursor: 'pointer' }}>
                <img src={Fasttracksmartwatch} className="card-img-top" style={{  minWidth: '200px',height: '150px', objectFit: 'contain' }} alt="Fastrack" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Fastrack Smartwatc...<br /><small className="text-muted">From ₹1,399*</small></p>
                </div>
              </div>

              <div className="card me-3" onClick={() => navigate('/Viewsonic Monitor')} style={{ cursor: 'pointer' }}>
                <img src={viewsonicmonitors} className="card-img-top" style={{  minWidth: '200px',height: '150px', objectFit: 'contain' }} alt="Viewsonic Monitor" />
                <div className="card-body text-center">
                  <p className="card-text fw-medium">Viewsonic Monitor<br /><small className="text-muted">From ₹13,999*</small></p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Productelectronics;