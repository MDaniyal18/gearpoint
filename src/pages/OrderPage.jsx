/**
 * pages/OrderPage.jsx
 * Placeholder for "Order" nav item — links to Contact for now
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = () => (
  <section className="order-page">
    <div className="container order-page__inner">
      <div className="order-page__icon">📋</div>
      <h1>Place an Order</h1>
      <p>
        Ready to get started? Fill out our contact form to tell us about your
        project and we'll be in touch to discuss your requirements, timeline,
        and pricing.
      </p>
      <Link to="/contact" className="btn btn--primary btn--lg">
        Contact Us to Order
      </Link>
    </div>
  </section>
);

export default OrderPage;
