import React from 'react';
import './Ad.scss';


class Ad extends React.Component {

  render() {
    return(
      <div className="pencilAd">
        First shipping on your first order and any order over $89 &nbsp;
        <a href="www.google.com">Click to see Details</a>
      </div>
    );
  }

}

export default Ad;