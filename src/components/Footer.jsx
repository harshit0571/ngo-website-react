import React from "react";

const Footer = () => {
  return (
    <footer>
      <section class="contact">
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p class="question">DO YOU HAVE A QUESTION?</p>
          <p class="number">+0123 456 789</p>
        </div>
        <div class="contact-2">
          <div>
            <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
            <input type="search" placeholder="Enter email" />
          </div>
          <button>Subscribe</button>
        </div>
      </section>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <h1>OUR MISSION</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              voluptas omnis esse recusandae, nam laudantium alias doloremque
              consequuntur reprehenderit adipisci commodi nostrum! Blanditiis
              laudantium nobis quae saepe maiores voluptatem accusamus.
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              culpa voluptatibus iusto magni quas.
            </p>
          </div>

          <div class="footer-links">
            <h2 class="links">QUICK LINKS</h2>
            <br />
            <ul class="footer-links-ul">
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                Home
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                About
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                Causes
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                Events
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                News
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                Content
              </li>
            </ul>
          </div>

          <div class="gallery">
            <h2 class="gal-btn">GALLERY</h2>
            <div class="gal-container">
              <div>
                <img src="assets/ga1.png" />
                <img src="assets/ga2.png" />
              </div>
              <div>
                <img src="assets/gap3.png" />
                <img src="assets/gal4.png" />
              </div>
              <div>
                <img src="assets/gal5.png" />
                <img src="assets/gal6.png" />
              </div>
            </div>
          </div>

          <div class="contact-footer">
            <h2 class="contact-btn">CONTACT US</h2>

            <div class="contact-container">
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
            </div>
          </div>
          <p class="copyright">
            Copyright @ 2017. Developed by Harshit Chadha. All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
