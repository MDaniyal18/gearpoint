/**
 * components/sections/ServiceCard.jsx
 */
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="service-card animate-fade-up">
    <div className="service-card__icon" aria-hidden="true">
      {Icon && <Icon size={32} strokeWidth={1.5} />}
    </div>
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__description">{description}</p>
    {features && features.length > 0 && (
      <ul className="service-card__list">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    )}
  </div>
);

export default ServiceCard;
