import React from 'react';

const Subscribe = () => {
  return (
    <div>
      <div className="home-subscribe">
        <h2>
          Detect your next <span style={{ color: '#ff4f00' }}>big move</span>
        </h2>
        <p>
          Experience the synergy of your favorite tools working seamlessly{' '}
          <br></br> together, all powered by Horizon's cutting-edge AI
          analytics.
        </p>
        <div>
          <input
            type="email"
            placeholder="yourmail@gmail.com"
            className="home-subscribe-input"
          />
          <button className="subscribe-now">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
