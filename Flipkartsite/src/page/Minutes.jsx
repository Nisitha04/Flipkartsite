import React from 'react';
import Navbar from '../components/Navbar';
import mbanner from '../assets/pictures/mbanner.jpeg';
import mgfruits from '../assets/pictures/mgfruits.jpeg';
import mgatta from '../assets/pictures/mgatta.jpeg';
import mgchicken from '../assets/pictures/mgchicken.jpeg';
import Breakfastcereal from '../assets/pictures/Breakfastcereal.jpeg';
import mssweets from '../assets/pictures/mssweets.jpeg';
import msice from '../assets/pictures/msice.jpeg';
import msdrinks from '../assets/pictures/msdrinks.jpeg';
import msbiscuits from '../assets/pictures/msbiscuits.jpeg';
import mgd from '../assets/pictures/mgd.jpeg';
import mgi from '../assets/pictures/mgi.jpeg';
import mss from '../assets/pictures/mss.jpeg';
import mst from '../assets/pictures/mst.jpeg';


const Minutes = () => {
  const groceryItems = [
    { img: mgfruits, label: "Fruits & Vegetables" },
    { img: mgatta, label: "Atta, Rice & Dal" },
    { img: Breakfastcereal, label: "Breakfast Cereal" },
    { img: mgi, label: "Instant & Frozen foods" },
    { img: mgd, label: "Diary Breads & Eggs" },
    { img: mgchicken, label: "Chicken, Meat & Fish" },


  ];

  const snacksItems = [
    { img: mssweets, label: "Sweets & Chocolate" },
    { img: msice, label: "Ice Creams" },
    { img: msdrinks, label: "Drinks & Juices" },
    { img: msbiscuits, label: "Bakery & Biscuits " },
    { img: mss, label: "Sauses & Spreads" },
    { img: mst, label: "Tea Coffee & Milk Drinks" },


  ];

  return (
    <div>
    <div>
      <Navbar/>
    </div>
    <div className="container mt-4">
      <div className="alert alert-light text-center">
        <strong>Share your location</strong> to access Minutes & explore offers trending in your area.
      </div>

      <div className="mt-4">
            <div className="row justify-content-end">
              <div className="col-12 mt-3">
                <img src={mbanner} className="img-fluid " alt="Banner" />
              </div>
            </div>
        </div>

      <h5 className="fw-bold mb-3">Grocery</h5>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 mb-4 text-center">
        {groceryItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="border rounded p-2 bg-light h-100">
              <img
                src={item.img}
                alt={item.label}
                className="img-fluid mb-2"
                style={{ height: '250px', width:'250px', objectFit: 'contain' }}
              />
              <p className="small">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <h5 className="fw-bold mb-3">Snacks & Drinks</h5>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 text-center">
        {snacksItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="border rounded p-2 bg-light h-100">
              <img
                src={item.img}
                alt={item.label}
                className="img-fluid mb-2"
                style={{width: '250px', height: '250px', objectFit: 'contain' }}
              />
              <p className="small">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Minutes;