import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__divider"></div>
      <div className="footer__container">
        <div className="footer__brand">
          <h3 className="footer__logo">
            <span className="footer__logo-icon">&#9670;</span> Elemental Arena
          </h3>
          <p className="footer__tagline">Work out. Fight. Level up.</p>
        </div>
        <div className="footer__nav">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/target">Target Market</Link>
          <Link to="/about">About</Link>
          <Link to="/investors">Investors</Link>
        </div>
        <div className="footer__elements">
          <h4>The Elements</h4>
          <div className="footer__element-icons">
            <span className="footer__element footer__element--fire" title="Fire">&#128293;</span>
            <span className="footer__element footer__element--water" title="Water">&#128167;</span>
            <span className="footer__element footer__element--earth" title="Earth">&#127793;</span>
            <span className="footer__element footer__element--air" title="Air">&#128168;</span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2026 Elemental Arena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
