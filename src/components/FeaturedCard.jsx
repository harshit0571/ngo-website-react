import React from "react";

const FeaturedCard = ({ raised, goal, title }) => {
  return (
    <div class="featured-card">
      <div class="feature-img">
        <img src="assets/feature1.png" />
        <div class="feature-bar">
          <div class="line">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <p>{raised / goal}%</p>
          </div>
        </div>
      </div>
      <div class="feature-text">
        <div class="stats">
          <p>Raised: ${raised}</p>
          <p>Goal: ${goal}</p>
        </div>
        <div class="feature-heading">{title}</div>
        <button>Donate Now</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
