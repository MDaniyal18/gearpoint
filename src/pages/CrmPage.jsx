/**
 * pages/CrmPage.jsx
 * Salesforce / CRM page linked from the nav "CRM" item
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { CRM } from '../constants/siteData';
import './CrmPage.css';

const CrmPage = () => (
  <>
    {/* Header */}
    <div className="crm-header">
      <div className="container">
        <span className="badge badge--primary" style={{ marginBottom: '1rem' }}>
          Salesforce & Intuit
        </span>
        <h1>{CRM.heading}</h1>
        <p>{CRM.subheading}</p>
      </div>
    </div>

    {/* Body */}
    <section className="section crm-body">
      <div className="container">

        {/* Intro */}
        <div className="crm-intro">
          {CRM.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>

        {/* Feature Cards */}
        <div className="crm-features-grid">
          {CRM.features.map((f, i) => (
            <div key={i} className="crm-feature-card">
              <div className="crm-feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
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
