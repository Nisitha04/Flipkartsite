import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import fashion from '../assets/images/fashion.jpeg';
import Electronics from '../assets/images/Electronics.jpeg';
import beauty from '../assets/images/beauty.jpeg';
import Flight from '../assets/images/Flight.jpeg';
import Grocery from '../assets/images/Grocery.jpeg';
import Minutes from '../assets/images/Minutes.jpeg';
import Mobilesandtablets from '../assets/images/Mobilesandtablets.jpeg';
import Tvandappliances from '../assets/images/Tvandappliances.jpeg';

const Categoryicon = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-around bg-white py-3">
      <div className="text-center" onClick={() => navigate('/minutes')} style={{ cursor: 'pointer' }}>
        <img src={Minutes} width="70" alt="Minutes" />
        <br />
        Minutes
      </div>
      <div className="text-center" onClick={() => navigate('/Mobiles & Tablets')} style={{ cursor: 'pointer' }}>
        <img src={Mobilesandtablets} width="70" alt="Mobiles & Tablets" />
        <br />
        Mobiles & Tablets
      </div>
      <div className="text-center" onClick={() => navigate('/Fashion')} style={{ cursor: 'pointer' }}>
        <img src={fashion} width="70" alt="Fashion" />
        <br />
        Fashion
      </div>
      <div className="text-center" onClick={() => navigate('/Electronics')} style={{ cursor: 'pointer' }}>
        <img src={Electronics} width="70" alt="Electronics" />
        <br />
        Electronics
      </div>
      <div className="text-center" onClick={() => navigate('/Tv & Appliances')} style={{ cursor: 'pointer' }}>
        <img src={Tvandappliances} width="70" alt="TV & Appliances" />
        <br />
        TV & Appliances
      </div>
      <div className="text-center">
        <img src={Flight} width="70" alt="Flight" />
        <br />
        Flight Bookings
      </div>
      <div className="text-center" onClick={() => navigate('/Beauty, Food...')} style={{ cursor: 'pointer' }}>
        <img src={beauty} width="70" alt="Beauty" />
        <br />
        Beauty, Food...
      </div>
      <div className="text-center" onClick={() => navigate('/Grocery')} style={{ cursor: 'pointer' }}>
        <img src={Grocery} width="70" alt="Grocery" />
        <br />
        Grocery
      </div>
    </div>
  );
};

export default Categoryicon;