import React from 'react';
import last from '../assets/images/last.jpeg';

const LastBanner = () => {
  return (
    <div className="mt-4">
      <div className="row justify-content-end">
        <div className="col-12 mt-3">
          <img src={last} className="img-fluid w-100" alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default LastBanner;