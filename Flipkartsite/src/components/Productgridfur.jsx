import React from 'react';
import f1 from '../assets/images/f1.jpeg';
import f2 from '../assets/images/f2.jpeg';
import f3 from '../assets/images/f3.jpeg';
import f4 from '../assets/images/f4.jpeg';
import f5 from '../assets/images/f5.jpeg';
import f6 from '../assets/images/f6.jpeg';
import f7 from '../assets/images/f7.jpeg';
import f8 from '../assets/images/f8.jpeg';

const Productgridfur = () => {
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row" style={{ width: "100%" }}>
          <h5 className="mb-4">Furniture Top Deals</h5>
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center gap-3">

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f1} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Indoor Plants" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Indoor Plants<br />
                        <small className="text-muted">Up to 85% off</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f2} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Wall Clock" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Wall Clock<br />
                        <small className="text-muted">From 149*</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f3} className="card-img-top" style={{ height: "100px", objectFit: "contain" }} alt="Tools and Measuring" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Tools And Measurind...<br />
                        <small className="text-muted">Under 299*</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f4} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Showpieces" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Showpieces<br />
                        <small className="text-muted">From 99*</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f5} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Gas Stoves" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Gas Stoves<br />
                        <small className="text-muted">From 999*</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f6} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Bedsheets" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Double Bedsheets<br />
                        <small className="text-muted">From 189*</small>
                      </p>
                    </div>
                  </div>

                  <div className="card me-3" style={{ minWidth: "150px" }}>
                    <img src={f7} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} alt="Dinner Sets" />
                    <div className="card-body text-center">
                      <p className="card-text fw-medium">
                        Dinner Sets<br />
                        <small className="text-muted">From 499*</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productgridfur;