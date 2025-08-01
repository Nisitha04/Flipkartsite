import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import vivo from '../assets/images/vivo.jpeg';
import mortorolag85 from '../assets/images/mortorolag85.jpeg';
import mortorolag45 from '../assets/images/mortorolag45.jpeg';
import oppo from '../assets/images/oppo.jpeg';
import oppok13 from '../assets/images/oppok13.jpeg';
import pocof75g from '../assets/images/pocof75g.jpeg';
import realmep3 from '../assets/images/realmep3.jpeg';


const Productgridp = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid mt-4">
      <h5 className="mb-3">Best Deals on Smartphones</h5>

      <div className="d-flex">
        {/* Scrollable Cards */}
        <div id="carouselExample" className="carousel slide w-100">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex overflow-auto">

                <div className="card me-3" onClick={() => navigate('/Vivo T4 5G')} style={{ cursor: 'pointer' }}>
                  <img src={vivo} className="card-img-top" style={{ minWidth: '200px' , height: '150px', objectFit: 'contain' }} alt="Vivo T4" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      Vivo T4 5G<br />
                      <small className="text-muted">From ₹20,499*</small>
                    </p>
                  </div>
                </div>

                <div className="card me-3" onClick={() => navigate('/Motorola G85 5G')} style={{ cursor: 'pointer' }}>
                  <img src={mortorolag85} className="card-img-top" style={{ minWidth: '200px' ,height: '150px', objectFit: 'contain' }} alt="Motorola G85" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      Motorola G85 5G<br />
                      <small className="text-muted">From ₹17,999*</small>
                    </p>
                  </div>
                </div>

                <div className="card me-3" onClick={() => navigate('/Oppo K13 5G')} style={{ cursor: 'pointer' }}>
                  <img src={oppok13} className="card-img-top" style={{ minWidth: '200px' , height: '150px', objectFit: 'contain' }} alt="Oppo K13" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      Oppo K13 5G<br />
                      <small className="text-muted">From ₹16,499*</small>
                    </p>
                  </div>
                </div>

                <div className="card me-3" onClick={() => navigate('/Realme P3 5G')} style={{ cursor: 'pointer' }}>
                  <img src={realmep3} className="card-img-top" style={{ minWidth: '200px' , height: '150px', objectFit: 'contain' }} alt="Realme P3" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      Realme P3 5G<br />
                      <small className="text-muted">From ₹15,999*</small>
                    </p>
                  </div>
                </div>

                <div className="card me-3" onClick={() => navigate('/Motorola G45 5G')} style={{ cursor: 'pointer' }}>
                  <img src={mortorolag45} className="card-img-top" style={{ minWidth: '200px' , height: '150px', objectFit: 'contain' }} alt="Motorola G45" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      Motorola G45 5G<br />
                      <small className="text-muted">From ₹10,999*</small>
                    </p>
                  </div>
                </div>

                <div className="card me-3" onClick={() => navigate('/POCO F7 5G')} style={{ cursor: 'pointer' }}>
                  <img src={pocof75g} className="card-img-top" style={{ minWidth: '200px' , height: '150px', objectFit: 'contain' }} alt="POCO F7" />
                  <div className="card-body text-center">
                    <p className="card-text fw-medium">
                      POCO F7 5G<br />
                      <small className="text-muted">From ₹29,999*</small>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          
        </div>

        {/* Poster beside carousel */}
        <div className="ms-3">
          <img src={oppo} alt="Poster" className="img-fluid rounded shadow" style={{ width: '250px' }} />
        </div>
      </div>
    </div>
  );
};
export default Productgridp;