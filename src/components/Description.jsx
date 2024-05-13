import React from 'react';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const Description = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <div>
      <div className="home-desc">
        <div className="home-desc-1">
          {' '}
          <h2>
            Explore the power of<br></br> AI apps generation
          </h2>
          <p>
            Unlock the full potential of your tech stack with Horizon's
            intuitive and Unlock the full potential of your tech stack with
            GenAI's intuitive
          </p>
        </div>
        <div className="home-desc-2">
          <div className="home-desc-2-left">
            {' '}
            <img src={img1} alt="Image 1" />
          </div>
          <div className="home-desc-2-right">
            <h2>
              <span style={{ color: '#ff4f00' }}>Unleash</span> the power of AI
              with GenAI
            </h2>
            <p>
              Stay ahead of the curve with our Dynamic Trend Analysis feature.
              Unlock the full potential of your tech stack with Horizon's
              intuitive and Stay ahead of the curve with our Dynamic Trend
              Analysis feature. Unlock the full potential of your tech stack
              with Horizon's intuitive
            </p>
          </div>
        </div>
        <div className="home-desc-2">
          {isMobile ? (
            <>
            
              <div className="home-desc-2-left">
                {' '}
                <img src={img2} alt="Image 1" />
              </div>
              <div className="home-desc-2-right">
                <h2>
                  <span style={{ color: '#ff4f00' }}>Unleash</span> the power of
                  AI with GenAI
                </h2>
                <p>
                  Stay ahead of the curve with our Dynamic Trend Analysis
                  feature. Unlock the full potential of your tech stack with
                  Horizon's intuitive and Stay ahead of the curve with our
                  Dynamic Trend Analysis feature. Unlock the full potential of
                  your tech stack with Horizon's intuitive
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="home-desc-2-right">
                <h2>
                  <span style={{ color: '#ff4f00' }}>Unleash</span> the power of
                  AI with GenAI
                </h2>
                <p>
                  Stay ahead of the curve with our Dynamic Trend Analysis
                  feature. Unlock the full potential of your tech stack with
                  Horizon's intuitive and Stay ahead of the curve with our
                  Dynamic Trend Analysis feature. Unlock the full potential of
                  your tech stack with Horizon's intuitive
                </p>
              </div>
              <div className="home-desc-2-left">
                {' '}
                <img src={img2} alt="Image 1" />
              </div>
            </>
          )}
        </div>
        <div className="home-desc-2">
          <div className="home-desc-2-left">
            {' '}
            <img src={img3} alt="Image 1" />
          </div>
          <div className="home-desc-2-right">
            <h2>
              <span style={{ color: '#ff4f00' }}>Unleash</span> the power of AI
              with GenAI
            </h2>
            <p>
              Stay ahead of the curve with our Dynamic Trend Analysis feature.
              Unlock the full potential of your tech stack with Horizon's
              intuitive and Stay ahead of the curve with our Dynamic Trend
              Analysis feature. Unlock the full potential of your tech stack
              with Horizon's intuitive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
