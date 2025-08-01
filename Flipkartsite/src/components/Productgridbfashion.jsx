import React from 'react';
import q1 from '../assets/images/q1.jpeg';
import q2 from '../assets/images/q2.jpeg';
import q3 from '../assets/images/q3.jpeg';
import q4 from '../assets/images/q4.jpeg';
import realmep3 from '../assets/images/realmep3.jpeg';
import q6 from '../assets/images/q6.jpeg';
import f6 from '../assets/images/f6.jpeg';
import f7 from '../assets/images/f7.jpeg';
import q9 from '../assets/images/q9.jpeg'; 

const Productgridbfashion = () => {
  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-9">
            <div className="mb-2">
              <h5 className="fw-bold">Fashion's Top Deals</h5>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={q1} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Slippers" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Men's Slippers & Flip Flops</div>
                    <div className="text-muted small">Min. 70% Off</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={q2} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="T-Shirts" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Men's T-Shirts</div>
                    <div className="text-muted small">In Focus Now</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={q3} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Shirt" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Casual Shirts</div>
                    <div className="text-muted small">Upto 60% Off</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={q4} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Sarees" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Women's Sarees</div>
                    <div className="text-muted small">Best Sellers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-2">
              <h5 className="fw-bold">Trending Gadgets & Appliances</h5>
            </div>

            <div className="row g-3">
              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={realmep3} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Realme" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Realme P3 5G</div>
                    <div className="text-muted small">Min. 10% Off</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={q6} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Cameras" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Cameras</div>
                    <div className="text-muted small">Min. 30% Off</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={f6} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Hair Dryers" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Double Bedssheets</div>
                    <div className="text-muted small">From ₹199</div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card text-center p-2">
                  <img src={f7} className="card-img-top mx-auto" style={{ height: '140px', objectFit: 'contain' }} alt="Washing Machines" />
                  <div className="card-body p-1">
                    <div className="fw-medium">Dinner Sets</div>
                    <div className="text-muted small">Upto 20% Off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Poster image on the right */}
          <div className="col-md-3 d-none d-md-block">
            <div className="h-100">
              <img src={q9} className="img-fluid rounded w-100 h-100" style={{ maxHeight: '500px' }} alt="Shop Your Fashion Needs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productgridbfashion;