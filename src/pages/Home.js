import React, { useLayoutEffect } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <section class="banner-1">
        <div class="diagonal-div"></div>
        <div class="diagonal-div-2"></div>

        <div class="banner-text">
          <p class="banner-heading-1">BRING CLEAN WATER TO</p>
          <p class="banner-heading-2">AN ASIAN VILLAGE</p>
          <p class="banner-heading-3">
            Access to clean and safe drinking water is a fundamental human
            right, yet many villages in Asia still struggle with waterborne
            diseases and the burden of fetching water from distant, contaminated
            sources.
          </p>
          <button
            onClick={() => {
              navigate("causes");
            }}
          >
            Donate Now
          </button>
        </div>
      </section>

      <section class="help-section">
        <p>
          HOW COULD <span style={{ color: "var(--red)" }}>YOU HELP ?</span>
        </p>
        <div class="help-container">
          <div class="cards">
            <div class="help-img">
              <img src="assets/help1.png" />
            </div>
            <h1>Expertise Skills</h1>
            <p>
              With a profound knowledge of cutting-edge technologies, years of
              hands-on experience.
            </p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/help2.png" />
            </div>
            <h1>Give Inspiration</h1>
            <p>
              Every great accomplishment begins with a spark of inspiration.
              It's the driving.
            </p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/help3.png" />
            </div>
            <h1>Expertise Skills</h1>
            <p>
              Our deep expertise in diverse fields allows us to provide support
              and insights.
            </p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/help4.png" />
            </div>
            <h1>Give Inspiration</h1>
            <p>
              In the journey of life, challenges may seem daunting, but they are
              opportunities in disguise.
            </p>
          </div>
        </div>
      </section>

      <section class="about-us">
        <div class="about-us-1">
          <img src="assets/about.png" />
        </div>
        <div class="about-us-2">
          <div class="about-text">
            <p class="about-heading-2">WE ARE</p>
            <p class="about-heading-2">NON-PROFIT TEAM</p>
            <p class="about-heading-3">
              We are a team of dedicated individuals, volunteers, and supporters
              who share a common vision: to alleviate suffering, promote
              equality, and uplift communities. With unwavering determination
              and a heartfelt passion for change, we have undertaken numerous
              projects and initiatives.
            </p>
            <button
              onClick={() => {
                navigate("causes");
              }}
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      <section class="feature-section">
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
              <button
                onClick={() => {
                  navigate("causes");
                }}
              >
                Donate Now
              </button>
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
              <button
                onClick={() => {
                  navigate("causes");
                }}
              >
                Donate Now
              </button>
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
              <button
                onClick={() => {
                  navigate("causes");
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <h1>WHAT PEOPLE SAY</h1>
        <div class="dialog">
          <img src="assets/quotes.png" />
          <p style={{ marginBottom: "30px" }}>
            People say that life is a journey, and along the way, we encounter
            joys, sorrows, and countless moments that shape our stories. What we
            say and do, the connections we make, and the impact we leave on the
            world are all part of this beautiful narrative
          </p>

          <div class="triangle"></div>
          <span>
            <span style={{ color: "var(--red)" }}>JOHN DOE</span> | NGO
          </span>
        </div>

        <div class="test-photos">
          <img src="assets/test1.png" />
          <img src="assets/test2.png" />
          <img src="assets/test3.png" />
          <img src="assets/test4.png" class="display" />
          <img src="assets/test5.png" class="display" />
        </div>
      </section>

      <section class="volunteer">
        <p class="title">
          BEST <span style={{ color: "var(--red)" }}>VOLUNTEERS</span>
        </p>

        <div class="help-container">
          <div class="cards">
            <div class="help-img">
              <img src="assets/vol1.png" />
            </div>
            <h1>JOHN DOE</h1>
            <p>Volunteer</p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/vol2.png" />
            </div>
            <h1>JOHN DOE</h1>
            <p>Volunteer</p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/vol3.png" />
            </div>
            <h1>JOHN DOE</h1>
            <p>Volunteer</p>
          </div>

          <div class="cards">
            <div class="help-img">
              <img src="assets/vol4.png" />
            </div>
            <h1>JOHN DOE</h1>
            <p>Volunteer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
