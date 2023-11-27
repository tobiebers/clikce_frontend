import React from 'react';
import Image from 'public/logo.png';

const Footer = () => {
  return (
    <div className='d-flex justify-content-between align-items-center text-secondary'
         style={{ backgroundColor: 'rgba(214, 235, 234, 0.7)' }}>
      <p className="text-s">© 2023 CLIKCE. All rights Reserved. <a href="/privacy-policy">Privacy Policy</a></p>
      <img src="logo.png" alt="Logo" width={80} height={80} className="img-fluid" />
    </div>
  );
};

export default Footer;
