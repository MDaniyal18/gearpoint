/**
 * components/layout/Navbar.jsx
 * Uses React Router <NavLink> so the active page is highlighted.
 */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScrolled } from '../../hooks/useScrolled';
import { NAV_LINKS } from '../../constants/siteData';
import './Navbar.css';

const Navbar = () => {
  const scrolled        = useScrolled(30);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" onClick={close}>
            <div className="navbar__logo-icon">G</div>
            <div>
              <span className="navbar__logo-text">
                Gear<span>Point</span> Solutions
              </span>
              <span className="navbar__logo-sub">Technology for Non-Profits</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="navbar__links">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    end={link.href === '/'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="btn btn--primary navbar__cta">
            Schedule Consultation
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <nav className={`navbar__mobile${open ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(link => (
          <NavLink
            key={link.href}
            to={link.href}
            end={link.href === '/'}
            onClick={close}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {link.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn--primary" onClick={close}>
          Schedule Consultation
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
