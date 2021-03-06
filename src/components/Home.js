import React from 'react';
import './Home.scss';
import juice1 from '../assets/juice-1.jpg';
import juice2 from '../assets/juice-2.jpg';
import juice3 from '../assets/juice-3.jpg';
import juice4 from '../assets/juice-4.jpg';
import location1 from '../assets/location-1.jpg';
import location2 from '../assets/location-2.jpg';
import location3 from '../assets/location-3.jpg';
import location4 from '../assets/location-4.jpg';


class Home extends React.Component {
  render() {
    return(
      <div className="mainWrap">
        <div className="deliverySection">
          <div className="deliveryHero">
          <div className="colorOverlay"></div>
            <div className="container">
              <h1>We ship overnight nationwide</h1>
              <h4>We deliver Tuesday–Friday and have the ability to schedule ahead.</h4>
              <button className="btn-fill">View Menu</button>
            </div>
          </div>
          <div className="box">
            <div className="container">
              <h2>You buy it by the box</h2>
              <p>Choose 7–8 products of your liking and have it delivered
                to your door as often as you want. You pick, every time.
              </p>
              <div className="stepSection">
                <div className="stepWrapper">
                  <div className="step">
                    <div className="number">01</div>
                    <div className="text">
                      Build Your Box
                    <span className="border"></span>
                    <span className="subtext">Choose your favorites</span>
                    </div>
                  </div>
                  <div className="step">
                    <div className="number">02</div>
                    <div className="text">
                      {"Subscribe or Don't"}
                      <span className="border"></span>
                      <span className="subtext">Save when you do</span>
                    </div>
                  </div>
                  <div className="step">
                    <div className="number">03</div>
                    <div className="text">
                      Pick a Delivery Day
                      <span className="border"></span>
                      <span className="subtext">We ship overnight</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-outline">Shop the Menu</button>
            </div>
          </div>
        </div>

        <div className="drinksSection">
          <div className="drinksHero">
            <div className="container">
              <h1>Drinks</h1>
              <span className="line"></span>
              <h2>Juices</h2>
              <p>Our juices are individually crafted to flush, detoxify, hydrate
                and strengthen the body.
              </p>
              <button className="btn-fill">View Juice Menu</button>
            </div>
          </div>
          <div className="drinksProducts">
            <div className="container">
              <h2>Pick your pleasure</h2>
              <p>Our products are nourishing, satiating and never cut
                with cheap filters
              </p>
              <div className="products">
                <ul className="productImages">
                  <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice1} className="juice-1" alt="juice-1" />
                        <div className="overlay">
                          <p className="imgText">View Lemonade Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice2} className="juice-2" alt="juice-2" />
                        <div className="overlay">
                          <p className="imgText">View Milk Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice3} className="juice-3" alt="juice-3" />
                        <div className="overlay">
                          <p className="imgText">View Juice Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>
                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice4} className="juice-4" alt="juice-4" />
                        <div className="overlay">
                          <p className="imgText">View Smoothies Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <button className="btn-outline">View Drinks Menu</button>
              </div>
            </div>
          </div>
        </div>

        <div className="cleanseSection">
        <div className="colorOverlayWhite"></div>
          <div className="container">
            <h1>Cleanse</h1>
            <span className="line"></span>
            <h2>Drink yourself clean</h2>
            <p>You like those cupcakes right?
              Sweet-spot for the whiskey neat? We get it.
              Time to cleanse.
            </p>
            <button className="btn-fill">Shop Cleanses</button>
          </div>
        </div>

        <div className="locationSection">
          <div className="container">
            <h1>Locations</h1>
            <div className="location">
              <ul className="locationImages">
                <li>
                  <a href="#/">
                    <div className="thumb">
                      <img src={location1} className="location-1" alt="platform location" />
                      <div className="overlay">
                        <p className="imgText">View Store Details</p>
                      </div>
                      <div className="storeInfo">
                        <h4>Platform</h4>
                        <p>Monday – Sunday / 7am – 8pm</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <div className="thumb">
                      <img src={location2} className="location-2" alt="dtla location" />
                      <div className="overlay">
                        <p className="imgText">View Store Details</p>
                      </div>
                      <div className="storeInfo">
                        <h4>DTLA</h4>
                        <p>Monday – Saturday / 7:30am – 7pm</p>
                        <p>Sunday / 8am – 6pm</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <div className="thumb">
                      <img src={location3} className="location-3" alt="pasadena location" />
                      <div className="overlay">
                        <p className="imgText">View Store Details</p>
                      </div>
                      <div className="storeInfo">
                        <h4>Pasadena</h4>
                        <p>Monday – Friday / 8am – 9pm</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <div className="thumb">
                      <img src={location4} className="location-4" alt="venice location" />
                      <div className="overlay">
                        <p className="imgText">View Store Details</p>
                      </div>
                      <div className="storeInfo">
                        <h4>Venice</h4>
                        <p>Monday – Friday / 8am – 9pm</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <button className="btn-outline">View All Locations</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;