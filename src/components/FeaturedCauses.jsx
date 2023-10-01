import React from "react";

const FeaturedCauses = () => {
  return (
    <section class="feature-section mb-20">
      <p>
        FEATURED <span style={{ color: "var(--red)" }}>CAUSES</span>
      </p>

      <div class="featured-container">
        <div class="featured-card">
          <div class="feature-img">
            <img src="assets/feature1.png" />
            <div class="feature-bar">
              <div class="line">
                <span class="line-1"></span>
                <span class="line-2"></span>
                <p>30%</p>
              </div>
            </div>
          </div>
          <div class="feature-text">
            <div class="stats">
              <p>Raised: $300,000</p>
              <p>Goal: $800,000</p>
            </div>
            <div class="feature-heading">
              Africa Children Need More Food, Water and Clothes
            </div>
            <button>Donate Now</button>
          </div>
        </div>

        <div class="featured-card">
          <div class="feature-img">
            <img src="assets/feature2.png" />
            <div class="feature-bar">
              <div class="line">
                <span class="line-1"></span>
                <span class="line-2"></span>
                <p>30%</p>
              </div>
            </div>
          </div>

          <div class="feature-text">
            <div class="stats">
              <p>Raised: $300,000</p>
              <p>Goal: $800,000</p>
            </div>
            <div class="feature-heading">
              Africa Children Need More Food, Water and Clothes
            </div>
            <button>Donate Now</button>
          </div>
        </div>

        <div class="featured-card">
          <div class="feature-img">
            <img src="assets/feature3.png" />
            <div class="feature-bar">
              <div class="line">
                <span class="line-1"></span>
                <span class="line-2"></span>
                <p>30%</p>
              </div>
            </div>
          </div>
          <div class="feature-text">
            <div class="stats">
              <p>Raised: $300,000</p>
              <p>Goal: $800,000</p>
            </div>
            <div class="feature-heading">
              Africa Children Need More Food, Water and Clothes
            </div>
            <button>Donate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
