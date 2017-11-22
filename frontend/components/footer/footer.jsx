import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="footer-container">
    <div id="footer" className="container footer">
      <div className="footer-row">
        <div className="footer-col-3">
          <ul className="footer-links">
            <li><a>{"Home"}</a></li>
            <li><a>{"About us"}</a></li>
            <li><a>{"Blog"}</a></li>
            <li><a>{"Jobs"}</a></li>
            <li><a>{"Help & FAQ"}</a></li>
            <li><a>{"Most popular charts"}</a></li>
          </ul>
        </div>
        <div className="footer-col-3">
          <ul className="footer-links">
            <li><a>{"Tourbox for artists"}</a></li>
            <li><a>{"API information"}</a></li>
            <li><a>{"Community guidelines"}</a></li>
            <li><a>{"Terms of use"}</a></li>
            <li><a>{"Privacy policy"}</a></li>
            <li><a>{"Security"}</a></li>
          </ul>
        </div>
        <div className="footer-col-6">
          <div className="tourbox-cta">
            <p>{"Cloning of Songkick is done out of love and admiration for the site."}</p>
          </div>

          <div className="social-container">
            <ul className="social-icons">
              <li>
                <a href="https://twitter.com/songkick">
                  <img width={22} height={18} src="//assets.sk-static.com/assets/nw/furniture/icons/twitter-161f1e4.png"/>
                  <span>{"Follow us."}</span>
                </a>
              </li>

              <li>
                <a href="http://www.facebook.com/songkick">
                  <img width={18} height={18} src="//assets.sk-static.com/assets/nw/furniture/icons/facebook-08359b5.png"/>
                  <span>{"Like us."}</span>
                </a>
              </li>

              <li>
                <span>{"But we really hope you love us."}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
