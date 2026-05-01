/**
 * pages/CrmPage.jsx
 * Salesforce / CRM page linked from the nav "CRM" item
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CRM_CONTENT } from '../constants/siteData';
import './CrmPage.css';

const CrmFeatureCard = ({ section }) => {
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

  const Icon = section.icon;

  return (
    <div className="crm-feature-card">
      {Icon && (
        <div className="crm-feature-card__icon">
          <Icon size={28} strokeWidth={2} />
        </div>
      )}
      <h3>{section.title}</h3>
      {section.subtitle && (
        <p className="crm-feature-card__subtitle" style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
          {section.subtitle}
        </p>
      )}
      <div className="crm-feature-card__content">
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

const CrmPage = () => (
  <>
    {/* Header */}
    <div className="crm-header">
      <div className="container crm-header__inner">
        <div className="crm-header__content">
          <span className="badge badge--primary" style={{ marginBottom: '1rem' }}>
            Salesforce & Intuit
          </span>
          <h1>{CRM_CONTENT.heading}</h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: '500px' }}>
            Empower your organization with intelligent customer relationship management and actionable insights.
          </p>
        </div>
        <div className="crm-header__image animate-slide-right">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
            alt="CRM Dashboard and Analytics" 
          />
        </div>
      </div>
    </div>

    {/* Body */}
    <section className="section crm-body">
      <div className="container">

        {/* Intro */}
        <div className="crm-intro">
          <p>{CRM_CONTENT.intro}</p>
        </div>

        {/* Sections */}
        <div className="crm-features-grid">
          {CRM_CONTENT.sections.map((section, i) => (
            <CrmFeatureCard key={i} section={section} />
          ))}
        </div>

        <div className="crm-intro" style={{ marginTop: '3rem' }}>
          <p>{CRM_CONTENT.outro}</p>
        </div>

        {/* In-page CTA */}
        <div className="crm-cta">
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

export default CrmPage;
