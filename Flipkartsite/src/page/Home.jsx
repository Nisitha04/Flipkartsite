import React from 'react';
import{ useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Categoryicon from '../components/Categoryicon';
import Banner from '../components/Banner';
import Productgridp from '../components/Productgridp';
import Productelectronics from '../components/Productelectronics';
import Productgridfur from '../components/Productgridfur';
import Productgridbfashion from '../components/Productgridbfashion';
import LastBanner from '../components/lastbanner';
import Footer from '../components/Footer';
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product');
  };
  return (
    <div>
        <Navbar />
        <Categoryicon/>
        <Banner/>
        <Productgridp/>
        <Productelectronics/>
        <Productgridfur/>
        <Productgridbfashion/>
        <LastBanner/>
        <Footer/>

    </div>
  );
};

export default Home
