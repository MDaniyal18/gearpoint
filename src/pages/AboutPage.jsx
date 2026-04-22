/**
 * pages/AboutPage.jsx
 * Matches gearpointcrm.com/About-Us-GearPoint-Solutions
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT } from '../constants/siteData';
import './AboutPage.css';

const AboutPage = () => (
  <>
    {/* Header */}
    <div className="about-page-header">
      <div className="container">
        <h1>{ABOUT.heading}</h1>
      </div>
    </div>

    {/* Hero image */}
    <img
      className="about-hero-img"
      src={ABOUT.heroBg}
      alt="GearPoint Solutions team working together"
      loading="eager"
    />

    {/* Content */}
    <section className="section">
      <div className="container">
        <div className="about-content">
          {ABOUT.body.map((para, i) => <p key={i}>{para}</p>)}

          <div className="about-values">
            <h2>Our Values</h2>
            <ol className="values-list">
              {ABOUT.values.map((v, i) => (
                <li key={i}>
                  <strong>{v.title}:</strong> {v.body}
                </li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutPage;
