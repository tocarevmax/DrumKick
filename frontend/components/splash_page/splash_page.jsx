import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="container">
    <div className="hero1" id="hero-image">
      <div className="value-message">
        <h1>Be the first to know about concerts</h1>
        <h3>Track your favorite artists and never miss them live.</h3>
      </div>

      <div className="start-tracking-box">
        <Link className="start-tracking-signup-link" to="/signup">start tracking bands</Link>
      </div>

      <img
        className="brief-slideshow"
         src="//assets.sk-static.com/assets/nw/components/homepage/hero-1-7b88a01.jpg"
      />

      <img
        className="brief-slideshow"
         src="//assets.sk-static.com/assets/nw/components/homepage/hero-2-ad5db6c.jpg"
      />

      <img
        className="brief-slideshow"
         src="//assets.sk-static.com/assets/nw/components/homepage/hero-3-f594edb.jpg"
      />

      <img
        className="brief-slideshow"
         src="//assets.sk-static.com/assets/nw/components/homepage/hero-4-c269994.jpg"
      />
    </div>
  </div>
);
