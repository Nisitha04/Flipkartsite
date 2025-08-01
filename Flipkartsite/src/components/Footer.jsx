import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase">About</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Flipkart Stories</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press</a></li>
              <li><a href="#" className="text-white text-decoration-none">Corporate Information</a></li>
            </ul>
          </div>

          {/* Group Companies */}
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase">Group Companies</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Myntra</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cleartrip</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shopsy</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase">Help</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Payments</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cancellation & Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase">Consumer Policy</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-white text-decoration-none">Return Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms Of Use</a></li>
              <li><a href="#" className="text-white text-decoration-none">Security</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sitemap</a></li>
              <li><a href="#" className="text-white text-decoration-none">Grievance Redressal</a></li>
              <li><a href="#" className="text-white text-decoration-none">EPR Compliance</a></li>
            </ul>
          </div>

          {/* Mail Us */}
          <div className="col-md-2 mb-3 small">
            <h6 className="text-uppercase">Mail Us:</h6>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
            <div className="mt-2">
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Registered Office */}
          <div className="col-md-2 mb-3 small">
            <h6 className="text-uppercase">Registered Office Address:</h6>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN: U51109KA2012PTC066107<br />
              Telephone: <a href="tel:18002029898" className="text-white">044-45614700</a>
            </p>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="d-flex justify-content-around border-top pt-3 mt-3 small flex-wrap">
          <span><a href="#" className="text-white text-decoration-none">Become a Seller</a></span>
          <span><a href="#" className="text-white text-decoration-none">Advertise</a></span>
          <span><a href="#" className="text-white text-decoration-none">Gift Cards</a></span>
          <span><a href="#" className="text-white text-decoration-none">Help Center</a></span>
          <span>© 2007-2025 Flipkart.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;