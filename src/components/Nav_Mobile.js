import React from 'react';
import './Nav_Mobile.scss';

class MenuLinks extends React.Component {
  render() {
    return (
        <div className={this.props.menuStatus} id='menu'>
          <ul>
            <li><a href="#/">Shop</a></li>
            <li><a href="#/">Cleanses</a></li>
            <li><a href="#/">Build a Box</a></li>
            <li><a href="#/">The Unconventional</a></li>
            <li><a href="#/">Here We Are</a></li>
          </ul>
        </div>
      )
    }
  }

class NavMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }

  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
      isOpen: false
    });
    };
  }

  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
        let menuStatus = this.state.isOpen ? 'isOpen' : '';
    return (
      <div className="anotherdiv" ref="root">
        {this.state.isOpen ? document.body.classList.add('navOpen') : document.body.classList.remove('navOpen')}
        <div className="menuBar" onClick={ this._menuToggle } >
          <div id="bars" className={ menuStatus }>
            <a href="#/"><i className="fas fa-bars"></i></a>
          </div>
        </div>

        <MenuLinks menuStatus={ menuStatus }/>
      </div>
    )
  }
}

export default NavMobile;
