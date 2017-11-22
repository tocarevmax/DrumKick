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
    <div className="benefits">
      <div className="benefit-block">
        <img
          src="//assets.sk-static.com/assets/nw/components/homepage/artist-icon-377d4ea.svg"/>
        <h4>Track your favorite artists</h4>
        <p>
          {"Tell us who you want to see live. Easily import your favorite artists from Spotify, Facebook and more."}
        </p>
      </div>

      <div className="benefit-block">
        <img
          src="//assets.sk-static.com/assets/nw/components/homepage/calendar-icon-2d97a4a.svg"/>
        <h4>Get personalized concert alerts</h4>
        <p>
          {"We'll email you as soon as your tracked artists announce shows nearby. No spam about bands you don’t care about."}
        </p>
      </div>

      <div className="benefit-block">
        <img
          src="//assets.sk-static.com/assets/nw/components/homepage/ticket-icon-cc3f1d4.svg"/>
        <h4>Never miss out on tickets</h4>
        <p>
          {"We send concert alerts early, with everything you need to buy tickets. You'll never miss a great concert again."}
        </p>
      </div>
    </div>
  </div>
);
