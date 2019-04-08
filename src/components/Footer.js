import React from 'react';
import './Footer.scss';

class Footer extends React.Component {

  render() {
    return(
      <div className="footer">

        <div className="container">
         <div className="footer-1">
            <div className="subscribe">
              <p>Let's be friends with benefits</p>
              <input type="email" className="email" required="required" placeholder="Email Address" />
              <input type="submit" className="submit" value="Ok!" />
            </div>

            <div className="footerNav">
              <div className="footerList">
                <ul>
                  <li><a href="#/" span className="listHeader">Company</a></li>
                  <li><a href="#/">Find Stores</a></li>
                  <li><a href="#/">Our Story</a></li>
                  <li><a href="#/">Our Juice</a></li>
                  <li><a href="#/">Our Farmers</a></li>
                  <li><a href="#/">Our Commitment</a></li>
                  <li><a href="#/">Careers</a></li>
                </ul>
              </div>

              <div className="footerList">
                <ul>
                  <li><a href="#/" span className="listHeader">Help</a></li>
                  <li><a href="#/">FAQ</a></li>
                  <li><a href="#/">Shipping</a></li>
                  <li><a href="#/">Return Policy</a></li>
                  <li><a href="#/">Gift Cards</a></li>
                  <li><a href="#/">Contact Us</a></li>
                  <li><a href="#/">Legal</a></li>
                </ul>
              </div>
              <div className="footerList">
                <ul>
                  <li><a href="#/" span className="listHeader">Social</a></li>
                  <li><a href="#/">Instagram</a></li>
                  <li><a href="#/">Twitter</a></li>
                  <li><a href="#/">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div className="footer-2">
            <div className="container">
              <div className="footerInfo">
                <p>© 2019. Juice Served Here. <span>Never Conventional.</span> All Right Reserved.</p>
                <ul>
                  <li><a href="#/">Privacy Policy</a></li>
                  <li><a href="#/">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
     );
  }

}
export default Footer;