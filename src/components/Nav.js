import React from 'react';
import './Nav.scss';
import logo from '../assets/logo.png';
import Dropdown from './Dropdown';
import NavMobile from './Nav_Mobile';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  componentDidMount() {
    const el = document.querySelector('.mainNav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    (this.state.scroll > this.state.top) ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
  }

  render() {
    return(
      <div className="navWrap" onMouseLeave = {this.handleClose}>
        <nav className={this.state.scroll > this.state.top ? "mainNav fixed-nav" : "mainNav"}>

          <NavMobile />

          <div className="mainNav-lg">
            <a href="#/">Log in</a>
              <ul>
                <li onMouseEnter = {this.handleOpen}><a href="#/">Shop</a></li>
                <li onMouseEnter = {this.handleClose}><a href="#/">Cleanse</a></li>
                <li onMouseEnter = {this.handleClose}><a href="#/">Build a Box</a></li>
                <li className="logoComp"><a href="#/"><img src={logo} className="logo" alt="logo" /></a><span className="juice">JUICE </span><span className="served">Served Here</span></li>
                <li onMouseEnter = {this.handleClose}><a href="#/">The Unconventional</a></li>
                <li onMouseEnter = {this.handleClose}><a href="#/">Who we are</a></li>
              </ul>
            <a href="#/"><i className="fas fa-archive"><span className="cart"> (2)</span></i></a>

          </div>
          {this.state.isOpen ? <Dropdown /> : null}
          {/* {this.state.isOpen && <Dropdown />} */}

        </nav>
      </div>
    );
  }
}

export default Nav;