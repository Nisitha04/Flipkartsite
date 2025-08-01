import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Existing imports
import Home from './page/Home';
import Minutes from './page/Minutes';
import Mobilestab from './page/Mobilestab';
import Fashion from './page/Fashion';
import Electronics from './page/Electronics';
import Tvappliance from './page/Tvappliance';
import Grocery from './page/Grocery';
import Beauty from './page/Beauty';
import Phone1 from './page/Phone1';
import Phone2 from './page/Phone2';
import Phone3 from './page/Phone3';
import Phone4 from './page/Phone4';
import Phone5 from './page/Phone5';
import Earbuds from './page/Earbuds';
import Smartwatch from './page/Smartwatch';
import Camera from './page/Camera';
import Bestselling from './page/Bestseling';
import Computer from './page/Computer';
import Fastsmart from './page/Fastsmart';
import Cart from './page/Cart';

// ✅ New imports
import ProductDetail from './page/ProductDetail';
import DeliveryPage from './page/DeliveryPage'; // create this file if not yet created

const App = () => {
  return (
      <Routes>
        {/* Home & categories */}
        <Route path="/" element={<Home />} />
        <Route path="Minutes" element={<Minutes />} />
        <Route path="Mobiles & Tablets" element={<Mobilestab />} />
        <Route path="Fashion" element={<Fashion />} />
        <Route path="Electronics" element={<Electronics />} />
        <Route path="TV & Appliances" element={<Tvappliance />} />
        <Route path="Grocery" element={<Grocery />} />
        <Route path="Beauty, Food..." element={<Beauty />} />
        
        {/* Product collections */}
        <Route path="Vivo T4 5G" element={<Phone1 />} />
        <Route path="Motorola G85 5G" element={<Phone2 />} />
        <Route path="Oppo K13 5G" element={<Phone3 />} />
        <Route path="Realme P3 5G" element={<Phone4 />} />
        <Route path="Motorola G45 5G" element={<Phone2 />} />
        <Route path="POCO F7 5G" element={<Phone5 />} />
        <Route path="Earbuds" element={<Earbuds />} />
        <Route path="Top Mirrorless Came..." element={<Camera />} />
        <Route path="Noise SmartWatches" element={<Smartwatch />} />
        <Route path="Best Selling Mobile S..." element={<Bestselling />} />
        <Route path="Fastrack Smartwatc..." element={<Fastsmart />} />
        <Route path="Viewsonic Monitor" element={<Computer />} />

        {/* ✅ New product detail & delivery routes */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="cart" element={<Cart />} />

      </Routes>
  );
};

export default App;