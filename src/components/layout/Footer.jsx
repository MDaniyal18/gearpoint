/**
 * components/layout/Footer.jsx
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_ADDRESS, FOOTER_LINKS, ABOUT } from '../../constants/siteData';
import logo_footer from '../../assets/Images/Logos/logo-footer-small.png';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logo_footer} alt="GearPoint Solutions" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">{ABOUT.footerBlurb}</p>
            <div className="footer__social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="footer__social-link" aria-label="LinkedIn">in</a>
              <a href="https://twitter.com"  target="_blank" rel="noopener noreferrer"
                 className="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="footer__social-link" aria-label="Facebook">f</a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul>
              {FOOTER_LINKS.company.map(l => (
                <li key={l.href}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul>
              {FOOTER_LINKS.services.map(l => (
                <li key={l.label}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Us</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">✉</span>
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>{SITE_PHONE}</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>{SITE_ADDRESS}</span>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/contact" className="btn btn--primary btn--sm">
                Schedule a Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="container">
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <ul className="footer__legal">
          {FOOTER_LINKS.legal.map(l => (
            <li key={l.label}><Link to={l.href}>{l.label}</Link></li>
          ))}
        </ul>
      </div>

    </div>
  </footer>
);

export default Footer;
