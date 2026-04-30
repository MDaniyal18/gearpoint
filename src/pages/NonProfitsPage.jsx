/**
 * pages/NonProfitsPage.jsx
 * Non-Profits page linked from the nav "Non-Profits" item
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NON_PROFITS_CONTENT } from '../constants/siteData';
import './NonProfitsPage.css';

const NonProfitsFeatureCard = ({ section }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;
  
  let displayText = section.body;
  let isTruncated = false;
  
  if (!expanded && section.body.length > maxLength) {
    const lastSpace = section.body.lastIndexOf(' ', maxLength);
    const cutText = section.body.substring(0, lastSpace > 0 ? lastSpace : maxLength);
    displayText = cutText + '...';
    isTruncated = true;
  }

  return (
    <div className="nonprofits-feature-card">
      {section.icon && <div className="nonprofits-feature-card__icon">{section.icon}</div>}
      <h3>{section.title}</h3>
      <div className="nonprofits-feature-card__content">
        <p>
          {displayText}
          {isTruncated && (
            <button className="read-more-btn" onClick={() => setExpanded(true)}>
              Read more
            </button>
          )}
          {expanded && section.body.length > maxLength && (
            <button className="read-more-btn" onClick={() => setExpanded(false)}>
              Show less
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

const NonProfitsPage = () => {
  const introParagraphs = NON_PROFITS_CONTENT.intro.split('\n\n');

  return (
    <>
      {/* Header */}
      <div className="nonprofits-header">
        <div className="container">
          <span className="badge badge--primary" style={{ marginBottom: '1rem' }}>
            For Small Businesses & Non-Profits
          </span>
          <h1>{NON_PROFITS_CONTENT.heading}</h1>
        </div>
      </div>

      {/* Body */}
      <section className="section nonprofits-body">
        <div className="container">

          {/* Intro */}
          <div className="nonprofits-intro">
            {introParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Sections */}
          <div className="nonprofits-features-grid">
            {NON_PROFITS_CONTENT.sections.map((section, i) => (
              <NonProfitsFeatureCard key={i} section={section} />
            ))}
          </div>

          {/* In-page CTA */}
          <div className="nonprofits-cta">
            <h2>Ready to get started?</h2>
            <p>Schedule a free consultation and let's map out the right CRM solution for your organization.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Schedule a Free Consultation
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NonProfitsPage;
