import React from 'react';
import './Home.scss';
import juice1 from '../assets/juice-1.jpg';
import juice2 from '../assets/juice-2.jpg';
import juice3 from '../assets/juice-3.jpg';
import juice4 from '../assets/juice-4.jpg';

class Home extends React.Component {
  render() {
    return(
      <div>
        <div class="deliverySection">
          <div className="deliveryHero">
            <div class="container">
              <h1>We ship overnight nationwide</h1>
              <h4>We deliver Tuesday–Friday and have the ability to schedule ahead.</h4>
              <button class="btn-fill">View Menu</button>
            </div>
          </div>
          <div className="box">
            <div class="container">
              <h2>You buy it by the box</h2>
              <p>Choose 7–8 products of your liking and have it delivered to your door as often as you want. You pick, every time.</p>
              <div className="stepSection">
                <div className="step">
                  <div className="number">01</div>
                  <div className="text">Build Your Box</div>
                </div>
                <div className="step">
                  <div className="number">02</div>
                  <div className="text">Subscribe or Don't</div>
                </div>
                <div className="step">
                  <div className="number">03</div>
                  <div className="text">Pick a Delivery Day</div>
                </div>
              </div>
              <button className="btn-fill">Shop the Menu</button>
            </div>
          </div>
        </div>

        <div className="drinksSection">
          <div className="drinksHero">
            <div className="container">
              <h1>Drinks</h1>
              <h2>Juices</h2>
              <p>Our juices are individually crafted to flush, detoxify, hydrate and strengthen the body.</p>
              <button className="btn-outline">View Juice Menu</button>
            </div>
          </div>
          <div className="drinksProducts">
              <h2>Pick your pleasure</h2>
              <p>Our products are nourishing, satiating and never cut with cheap filters</p>
              <div className="products">
                <ul className="productImages">
                  <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice1} className="juice-1" alt="juice-1" />
                        <div className="overlay">
                          <p className="imgText">View Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>

                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice2} className="juice-2" alt="juice-2" />
                        <div className="overlay">
                          <p className="imgText">View Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>

                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice3} className="juice-3" alt="juice-3" />
                        <div className="overlay">
                          <p className="imgText">View Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>

                   <li>
                    <a href="#/">
                      <div className="thumb">
                        <img src={juice4} className="juice-4" alt="juice-4" />
                        <div className="overlay">
                          <p className="imgText">View Menu</p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <button className="btn-outline">View Juice Menu</button>
              </div>
          </div>
        </div>
      </div>
     );
  }
}

export default Home;