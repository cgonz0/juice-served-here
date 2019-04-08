import React from 'react';
import './Dropdown.scss';

class Dropdown extends React.Component {

  render() {
    return (
      <div className="dropdown">
        <div className="dropdownNav">
          <div className="dropdownList">
            <ul>
              <li span className="listHeader">Drinks</li>
              <li><a href="#/">All</a></li>
              <li><a href="#/">Juices</a></li>
              <li><a href="#/">Smoothies</a></li>
              <li><a href="#/">Cleanse Packs</a></li>
              <li><a href="#/">Shots</a></li>
              <li><a href="#/">Coffee</a></li>
              <li><a href="#/">Water</a></li>
            </ul>
          </div>
          <div className="dropdownList">
            <ul>
            <li span className="listHeader">Goods</li>
              <li><a href="#/">All</a></li>
              <li><a href="#/">Teas</a></li>
              <li><a href="#/">Coffees</a></li>
              <li><a href="#/">Vitals</a></li>
              <li><a href="#/">Snacks</a></li>
            </ul>
          </div>
          <div className="dropdownList">
            <ul>
            <li span className="listHeader">Boxes</li>
              <li><a href="#/">All</a></li>
              <li><a href="#/">Favorite Boxes</a></li>
              <li><a href="#/">Sweet Cream Box</a></li>
              <li><a href="#/">Detox Box</a></li>
              <li><a href="#/">Greens Box</a></li>
            </ul>
          </div>
          <div className="dropdownList">
            <ul>
            <li span className="listHeader">Cleanses</li>
              <li><a href="#/">All</a></li>
              <li><a href="#/">Soft Cleanse</a></li>
              <li><a href="#/">Semi Cleanse</a></li>
              <li><a href="#/">Hard Cleanse</a></li>
            </ul>
          </div>
          <div className="navImage"></div>
        </div>
      </div>
    );
  }
}

export default Dropdown;