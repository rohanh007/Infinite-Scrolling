import React from 'react';
import '../shimmer.css';

const Shimmer = () => {
  return Array(20).fill(0).map((n, i)=>(
    <div key={i} className="shimmer-card">
      <div className="shimmer-vote-section">
        <div className="shimmer-line short"></div>
        <div className="shimmer-line short"></div>
        <div className="shimmer-line short"></div>
      </div>
      <div className="shimmer-content-section">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line image"></div>
        <div className="shimmer-line description"></div>
        <div className="shimmer-line description"></div>
      </div>
    </div>
  ));
};

export default Shimmer;
