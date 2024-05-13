import React from 'react';
import dashboard from '../images/dashboard.png';
const Body = () => {
  return (
    <div>
      <div className="home-body">
        <div className="body-left">
          <div className="body-left-inside">
            {' '}
            <h1>
              <span style={{ color: '#ff4f00' }}>Transform Ideas </span>
              <br></br>into apps with AI
            </h1>
            <p>
              Step into a new era of strategic decision-making. Horizon empowers
              business in the marketing space with unparalleled
            </p>
            <button className="get-started">Get started</button>
          </div>
        </div>
        <div className="body-right">
          <div className="body-right-img-container">
            {' '}
            <img src={dashboard} alt="dashboard" className="dashboard-img" />
          </div>
        </div>
        <div className="body-right"></div>
      </div>
    </div>
  );
};

export default Body;
