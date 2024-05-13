import './App.css';
import './components/Header';
import Header from './components/Header';
import Body from './components/Body';
import Description from './components/Description';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Help from './components/Help';
import Subscribe from './components/Subscribe';
function App() {
  return (
    <div className="App">
      <div className="home-container">
        <Header />
        <Body />
        <Description />
        <Features />
        <Pricing />
        <Help />
        <Subscribe />
        <div className="footer">
          <div className="footer-top">
            <h2>Get your AI apps built with <br></br> blazing speed.</h2>
            <button className="get-started">Get Started</button>
          </div>
          <div className="footer-bottom">
            <div className='footer-left'>
              <h3>GenAI</h3>
              <p>
                lorem ipsum dolor sit amet lorem<br></br> ipsum dolor sit maet lorem<br></br>
                ipsum dlor sit amet.
              </p>
              <p>All rights reserved</p>
            </div>
            <div className='footer-right'>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Story</li>
                <li>Company</li>
                <li>Product</li>
                <li>Press</li>
                <li>More</li>
                <li>Press</li>
                <li>Careers</li>
                <li>New Letters</li>
                <li>More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
