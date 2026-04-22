/**
 * pages/ContactPage.jsx
 * Matches gearpointcrm.com/Contact-Us-GearPoint-Solutions
 * Form: First Name, Last Name, Email, Phone, Request Type, Message
 */
import React, { useState } from 'react';
import { SITE_EMAIL, SITE_ADDRESS, REQUEST_TYPES } from '../constants/siteData';
import './ContactPage.css';

const INITIAL_STATE = {
  firstName:   '',
  lastName:    '',
  email:       '',
  phone:       '',
  requestType: '',
  message:     '',
};

const ContactPage = () => {
  const [form, setForm]         = useState(INITIAL_STATE);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim())   e.firstName   = 'First name is required';
    if (!form.lastName.trim())    e.lastName    = 'Last name is required';
    if (!form.email.trim())       e.email       = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim())       e.phone       = 'Phone is required';
    if (!form.requestType)        e.requestType = 'Please select a request type';
    if (!form.message.trim())     e.message     = 'Message is required';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // In a real app this would POST to a backend / Squarespace form endpoint
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Let's chat.</h1>
        </div>
      </div>

      {/* Body */}
      <section className="contact-body">
        <div className="container">
          <div className="contact-inner">

            {/* Form */}
            <div className="contact-form-wrap">
              <h2>Contact us via this form</h2>
              <p>
                Use the form below to tell us about your inquiry, and we'll call you
                back to schedule an appointment. Please be as detailed as possible.
              </p>

              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We'll be in touch shortly to schedule
                    your free consultation.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                  {/* Name Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                      />
                      {errors.firstName && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        aria-required="true"
                        aria-invalid={!!errors.lastName}
                      />
                      {errors.lastName && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.lastName}</span>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@organization.org"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.phone}</span>}
                  </div>

                  {/* Request Type */}
                  <div className="form-group">
                    <label htmlFor="requestType">
                      Request Type <span className="required">*</span>
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={form.requestType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.requestType}
                    >
                      <option value="">Select an option</option>
                      {REQUEST_TYPES.map(rt => (
                        <option key={rt} value={rt}>{rt}</option>
                      ))}
                    </select>
                    {errors.requestType && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.requestType}</span>}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your organization and what you need…"
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <span className="text-primary" style={{ fontSize: 'var(--text-xs)' }}>{errors.message}</span>}
                  </div>

                  {/* Submit */}
                  <div className="form-submit">
                    <button type="submit" className="btn btn--primary btn--lg">
                      Submit
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="contact-info">
              <div className="contact-info-block">
                <h4>📍 Location</h4>
                <p>{SITE_ADDRESS}</p>
              </div>
              <div className="contact-info-block">
                <h4>✉ Contact</h4>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
