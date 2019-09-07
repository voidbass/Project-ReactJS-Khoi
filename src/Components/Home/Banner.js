import React, { Component } from 'react';
import './style/Home.scss';


export default class Banner extends Component {
  render() {
    return (
      <div className="Home--banner__background">
        <img className="Home__banner" src="/lib/imgs/Homebanner.png" alt="Homebanner" />
        <div>
          <a href="/" className="Home__opensans3">MUA HÀNG</a>
        </div>
      </div>
    );
  }
}
