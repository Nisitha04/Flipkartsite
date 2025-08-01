import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import vivobann from '../assets/images/vivobann.jpeg';
import v1 from '../assets/pictures/v1.jpeg';
import v2 from '../assets/pictures/v2.jpeg';
import v3 from '../assets/pictures/v3.jpeg';
import v4 from '../assets/pictures/v4.jpeg';
import v5 from '../assets/pictures/v5.jpeg';
import v6 from '../assets/pictures/v6.jpeg';

const Phone1 = () => {
  const navigate = useNavigate();

  const products = [
    {id:'v1', src: v1, title: "Vivo T4 Lite 5G Charger in the Box(Prism Blue, 128 GB)", price: "₹10,999*" },
    {id:'v2', src: v2,  title: "Vivi T4 * 5G (Pronto Purple, 128 GB)", price: "₹13,999*" },
    {id:'v3', src: v3,  title: "Vivo T4 Lite 5G Charger in the Box(Prism Blue, 128 GB)", price: "₹9,499*" },
    {id:'v4', src: v4,  title: "Vivi T4 * 5G (Pronto Purple, 128 GB)", price: "₹14,999*" },
    {id:'v5', src: v5,  title: "Vivo T4 Lite 5G Charger in the Box(Titanium Gold, 128 GB)", price: "₹9,999*" },
    {id:'v6', src: v6,  title: "Vivo T4 Lite 5G Charger in the Box(Titanium Gold, 128 GB)", price: "₹10,999*" },

  ];
const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  

  return (
    <div className="container-fluid px-3">
    
      <Navbar />

      
      <img src={vivobann} style={{ height: '350px', width: '100%' }} className="img-fluid w-100 my-3 rounded" alt="Vivo Mpbile Banner" />
      
            
            <strong className="mb-4 d-block fs-4">VIVO MOBILES</strong>
      
            <div className="row g-4">
              {products.map((item, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                  <div
                    className="card h-100"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClick(item.id)}
                  >
                    <img
                      src={item.src}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'contain' }}
                      alt={item.title}
                    />
                    <div className="card-body text-center">
                      <strong className="card-text fw-medium mb-1 d-block">{item.title}</strong>
                      <strong className="text-muted">From {item.price}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };

export default Phone1;