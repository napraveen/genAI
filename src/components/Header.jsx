import React from 'react';

import logo from '../images/logo.png';
const Header = () => {
  return (
    <div>
      <header>
        <div className="header-left">
          {' '}
          <img src={logo} alt="Logo" className="my-logo" />
          &nbsp;
          <h4>GenAI</h4>
        </div>
        <div className="header-middle">
          <p>Features</p>
          <p>Product</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="header-right">
          <button className="get-started">Get Started -</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
