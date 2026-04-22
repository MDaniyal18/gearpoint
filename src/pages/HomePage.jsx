/**
 * pages/HomePage.jsx
 * Main landing page — assembles all sections.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/sections/ServiceCard';
import StatsBar    from '../components/sections/StatsBar';
import { HERO, ABOUT, SERVICES, SITE_EMAIL } from '../constants/siteData';
import './HomePage.css';

/* ─── Hero ───────────────────────────────────────────────────── */
const HeroSection = () => (
  <section id="home" className="hero" aria-label="Hero">
    <div className="container">
      <p className="hero__eyebrow">{HERO.eyebrow}</p>
      <p className="hero__subtitle">{HERO.tagline}</p>
      <h1 className="hero__title animate-fade-up">
        Take your non-profit management<br />
        to the <span>next level</span> with technology adoption
      </h1>
      <div className="hero__actions animate-fade-up delay-200">
        <Link to="/contact" className="btn btn--primary btn--lg">
          Schedule a Free Consultation
        </Link>
        <a href="#services" className="btn btn--outline btn--lg">
          Our Services
        </a>
      </div>
    </div>
    <div className="hero__banner">
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80"
        alt="Team collaborating on non-profit technology solutions"
        loading="eager"
      />
    </div>
  </section>
);

/* ─── About ───────────────────────────────────────────────────── */
const AboutSection = () => (
  <section id="about" className="section about-banner" aria-label="About GearPoint">
    <div className="container">
      <div className="about-banner__inner">
        <div className="about-banner__image animate-slide-right">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
            alt="GearPoint team helping a non-profit organization"
            loading="lazy"
          />
        </div>
        <div className="about-banner__content animate-fade-up">
          <span className="badge badge--primary">About Us</span>
          <h2 style={{ marginTop: '1rem' }}>
            We take the stress out of your IT Implementations
          </h2>
          {ABOUT.body.map((para, i) => (
            <p key={i} style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.8 }}>
              {para}
            </p>
          ))}
          <Link to="/about" className="btn btn--primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Services ────────────────────────────────────────────────── */
const ServicesSection = () => (
  <section id="services" className="section services" aria-label="Our Services">
    <div className="container">
      <div className="section-header">
        <span className="badge badge--primary">What We Offer</span>
        <h2>Professional Services Tailored to Your Mission</h2>
        <p>
          We bring efficient, state-of-the-art process and technology solutions
          to non-profits — helping you manage everything under one umbrella.
        </p>
      </div>
      <div className="services__grid">
        {SERVICES.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─────────────────────────────────────────────────────── */
const CTASection = () => (
  <section id="contact" className="section home-cta" aria-label="Get in touch">
    <div className="container">
      <p className="home-cta__eyebrow">
        We provide free consultation. Contact us to schedule
      </p>
      <h2>We take the stress out of your IT Implementations</h2>
      <Link to="/contact" className="btn btn--primary btn--lg">
        Schedule
      </Link>
    </div>
  </section>
);

/* ─── Page ────────────────────────────────────────────────────── */
const HomePage = () => (
  <main>
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <ServicesSection />
    <CTASection />
  </main>
);

export default HomePage;
