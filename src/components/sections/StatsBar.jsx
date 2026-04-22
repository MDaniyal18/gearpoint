/**
 * components/sections/StatsBar.jsx
 */
import React from 'react';
import { STATS } from '../../constants/siteData';
import './StatsBar.css';

const StatsBar = () => (
  <section className="stats-bar" aria-label="Impact statistics">
    <div className="container">
      <div className="stats-bar__grid">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-item__number">{stat.value}</div>
            <div className="stat-item__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
