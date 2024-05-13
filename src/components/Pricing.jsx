import React from 'react';

import arrow from '../images/arrow.png';
import bestValue from '../images/bestValue.png';
import tick from '../images/tick.png';
const Pricing = () => {
  return (
    <div>
      <div className="home-pricing-container">
        <h2 style={{ marginBottom: '50px', fontSize: '30px' }}>
          {' '}
          Start making
          <span style={{ color: '#ff4f00' }}> smarter</span> decisions,{' '}
          <br></br>Choose a plan
        </h2>
        <div className="home-pricing">
          <div className="home-pricing-explorer">
            <div className="home-pricing-head">
              <p>Explorer</p>
              <h3>
                $4,99<span style={{ color: '#9CA3AF' }}>/mo</span>
              </h3>
            </div>
            <div className="home-pricing-details">
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Market Trend Analysis</p>
              </div>

              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Limited Query Mapping</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Standard Dashboards</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Email Notifications</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Entry-Level Support</p>
              </div>
              <button className="get-now">Get now -</button>
            </div>
          </div>
          <div className="home-pricing-innovator">
            <div className="home-pricing-head">
              <p style={{ fontSize: '30px' }}>
                <span style={{ color: '#ff4f00' }}>Innovator &nbsp;</span>
                <span>
                  <img src={bestValue} alt="bestValue" className="best-value" />
                </span>
              </p>
              <h3>
                $4,99<span style={{ color: '#9CA3AF' }}>/mo</span>
              </h3>
            </div>
            <div className="home-pricing-details">
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Market Trend Analysis</p>
              </div>

              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Limited Query Mapping</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Standard Dashboards</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Email Notifications</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Entry-Level Support</p>
              </div>
              <button className="get-now-2">Get now -</button>
            </div>
          </div>
          <div className="home-pricing-visionary">
            <div className="home-pricing-head">
              <p>Explorer</p>
              <h3>
                $4,99<span style={{ color: '#9CA3AF' }}>/mo</span>
              </h3>
            </div>
            <div className="home-pricing-details">
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Market Trend Analysis</p>
              </div>

              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Limited Query Mapping</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Standard Dashboards</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Email Notifications</p>
              </div>
              <div className="pricing-details">
                <img src={arrow} alt="" />
                <p>Entry-Level Support</p>
              </div>
              <button className="get-now">Get now -</button>
            </div>
          </div>
        </div>
        <div className="home-pricing-bottom">
          <div>
            <img src={tick} alt="Tick Symbol" />
            <p>Free Trial</p>
          </div>
          <div>
            <img src={tick} alt="Tick Symbol" />
            <p>Cancel anytime</p>
          </div>
          <div>
            {' '}
            <img src={tick} alt="Tick Symbol" />
            <p>Support included</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
