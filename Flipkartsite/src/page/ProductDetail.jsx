
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import e1 from '../assets/pictures/e1.jpeg';
import e2 from '../assets/pictures/e2.jpeg';
import e3 from '../assets/pictures/e3.jpeg';
import e4 from '../assets/pictures/e4.jpeg';
import e5 from '../assets/pictures/e5.jpeg';
import e6 from '../assets/pictures/e6.jpeg';
import e7 from '../assets/pictures/e7.jpeg';
import e8 from '../assets/pictures/e8.jpeg';
import v1 from '../assets/pictures/v1.jpeg';
import v2 from '../assets/pictures/v2.jpeg';
import v3 from '../assets/pictures/v3.jpeg';
import v4 from '../assets/pictures/v4.jpeg';
import v5 from '../assets/pictures/v5.jpeg';
import v6 from '../assets/pictures/v6.jpeg';



const dummyProducts = {
  'earbuds1': {
    id: 'earbuds1',
    title: 'Boult Astra with Quad Mic ENC',
    price: 1299,
    oldPrice: 3299,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e1
  },
  'earbuds2': {
    id: 'earbuds2',
    title: 'TRIGGR Kraken x1 with Battery Display',
    price: 1999,
    oldPrice: 3499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e2
  },
  'earbuds3': {
    id: 'earbuds3',
    title: 'Boult Z60 with 60Hr Battery, Quad Mic',
    price: 1499,
    oldPrice: 3499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e3
  },
  'earbuds4': {
    id: 'earbuds4',
    title: 'Number Super Buds GT M9 Gaming TWS',
    price: 1999,
    oldPrice: 3499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e4
  },
  'earbuds5': {
    id: 'earbuds5',
    title: 'Realme Buds T200x with 25db ANC',
    price: 1999,
    oldPrice: 3499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e5
  },
  'earbuds6': {
    id: 'earbuds6',
    title: 'Mivi Duopods D4, 50hrs Playtime',
    price: 1999,
    oldPrice: 3499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e6
  },
  'earbuds7': {
    id: 'earbuds7',
    title: 'Realme Buds T200 Lite with 12.4mm',
    price: 2999,
    oldPrice: 4499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e7
  },
  'earbuds8': {
    id: 'earbuds8',
    title: 'Realme Buds T310 with 46db ANC special',
    price: 2999,
    oldPrice: 4499,
    discount: '62% Off',
    description: '48Hrs Battery, Low Latency Gaming, Made in India, 5.3v Bluetooth',
    image: e8
  },
  'v1': {
    id: 'v1',
    title: 'Vivo T4 Lite 5G Charger in the Box(Prism Blue, 128 GB)',
    price: 10999,
    oldPrice: 14999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v1
  },
  'v2': {
    id: 'v2',
    title: 'Vivi T4 * 5G (Pronto Purple, 128 GB)',
    price: 13999,
    oldPrice: 15999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v2
  },
  'v3': {
    id: 'v3',
    title: 'Vivo T4 Lite 5G Charger in the Box(Prism Blue, 128 GB)',
    price: 9999,
    oldPrice: 13999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v3
  },
  'v4': {
    id: 'v4',
    title: 'Vivi T4 * 5G (Pronto Purple, 128 GB)',
    price: 14999,
    oldPrice: 17999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v4
  },
  'v5': {
    id: 'v5',
    title: '',
    price: 9999,
    oldPrice: 13999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v5
  },
  'v6': {
    id: 'v6',
    title: '',
    price: 10999,
    oldPrice: 14999,
    discount: '26% Off',
    description:['8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
       '6.72 inch Full HD + AMOLED Display(120 Hz Refresh Rate)',
       '50MP + 2 MP Dual Rear Camera | 16 MP FRont Camera',
       '5000 mAh Battery with 44w Flash Charge',
       'Qualcomm Snapdragon 695 Processor',
       'Slide Fingerprint Sensor | Face Unlock'
    ],
    image: v6
  },
  
};

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  const product = dummyProducts[id];
  const isAdded = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    navigate('/delivery');
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container-fluid px-3">
      
      <Navbar />
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-7">
          <h4>{product.title}</h4>
          {Array.isArray(product.description) ? (
            product.description.map((line, idx) =>(
          <p key={idx}
        clasName="text-success mb-1">{line}</p>
              ))
            ) : (
               <p
               className="text-sucess mb-1">{product.description}</p>
            )}
          
          <h5>₹{product.price} <small className="text-muted ms-2"><del>₹{product.oldPrice}</del></small> <span className="text-success ms-2">{product.discount}</span></h5>
          <div className="mt-3 d-flex gap-3">
            <button onClick={handleAddToCart} className="btn btn-warning">
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
            <button onClick={handleBuyNow} className="btn btn-danger">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;