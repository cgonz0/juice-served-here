import React from 'react';
import './Nav.scss';
import logo from '../assets/logo.png';
import Dropdown from './Dropdown';

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
        isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
        isHovered: !prevState.isHovered
    }));
  }

  render() {
    return(
      <div>
        <div className="mainNav">

          <div className="mainNav-mobile">
            <a href="#/">Log in</a>
              <ul>
                <li className="logoComp-mobile"><a href="#/"><img src={logo} className="logo" alt="logo" /></a></li>
              </ul>
            <a href="#/"><i class="fas fa-archive"><span className="cart"> (2)</span></i></a>
          </div>

          <div className="mainNav-lg">
            <a href="#/">Log in</a>
              <ul>
                <li onMouseEnter={this.handleHover}><a href="#/">Shop</a></li>
                <li><a href="#/">Cleanses</a></li>
                <li><a href="#/">Build a Box</a></li>
                <li className="logoComp"><a href="#/"><img src={logo} className="logo" alt="logo" /></a><span className="juice">JUICE </span><span className="served">Served Here</span></li>
                <li><a href="#/">The Unconventional</a></li>
                <li><a href="#/">Who we are</a></li>
              </ul>
            <a href="#/"><i class="fas fa-archive"><span className="cart"> (2)</span></i></a>
          </div>

        </div>

        {this.state.isHovered ? <Dropdown /> : null}

      </div>
    );
  }
}

export default Nav;