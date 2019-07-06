import React from 'react';
import './Nav.scss';
import logo from '../assets/logo.png';
import Dropdown from './Dropdown';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
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
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0;
  }

  render() {
    return(
      <div>
        <nav className={this.state.scroll > this.state.top ? "mainNav fixed-nav" : "mainNav"}>

          <div className="mainNav-mobile">
            <a href="#/">Log in</a>
              <ul>
                <li className="logoComp-mobile"><a href="#/"><img src={logo} className="logo" alt="logo" /></a></li>
              </ul>
            <a href="#/"><i className="fas fa-archive"><span className="cart"> (2)</span></i></a>
          </div>

          <div className="mainNav-lg">
            <a href="#/">Log in</a>
              <ul>
                <li
                onMouseEnter = {this.handleOpen} onMouseLeave = {this.handleClose}
                >
                <a href="#/">Shop</a></li>
                <li><a href="#/">Cleanses</a></li>
                <li><a href="#/">Build a Box</a></li>
                <li className="logoComp"><a href="#/"><img src={logo} className="logo" alt="logo" /></a><span className="juice">JUICE </span><span className="served">Served Here</span></li>
                <li><a href="#/">The Unconventional</a></li>
                <li><a href="#/">Who we are</a></li>
              </ul>
            <a href="#/"><i className="fas fa-archive"><span className="cart"> (2)</span></i></a>

          </div>
          {this.state.isOpen ? <Dropdown /> : null}

        </nav>
      </div>
    );
  }
}

export default Nav;