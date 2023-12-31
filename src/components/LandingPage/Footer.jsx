import footerLogo from "../../assets/images/footerLogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import React from "react";
function Footer() {
  return (
    <div className="footer-root">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={footerLogo} alt=" logo" />
        </div>
        <div className="footer-text">
          <p>
            QusaQus platform is aimed to promote African-made products for the broader ordinance. We made this  e-commerce site for SMEs in the furniture and homeware industry and made it easy for them to sell their products online.
          </p>
          <div className="footer-social-icons">
            {/* <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-icon social-icons"
            /> */}
            {/* <FontAwesomeIcon
              icon={faTwitter}
              className="twitter-icon social-icons"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="instagram-icon social-icons"
            /> */}
          </div>
        </div>
      </div>
      <div className="footer-center">
        <input
          type="text"
          className="name-input"
          placeholder="Name"
          name="name"
          autoComplete="on"
        />
        <input
          type="text"
          className="email-input"
          placeholder="Email"
          name="email"
          autoComplete="on"
        />
        <button className="btn-4">Subscribe</button>
      </div>
      <div className="footer-right">
        <h4>Help and Support</h4>
        <span>FAQ</span>
        <span>Contact Us</span>
      </div>
      <div className="footer-bottom">
        <span>
          <a href="/" className="terms-privacy">
            Terms of Service |
          </a>
          <a href="/" className="terms-privacy">
            Privacy Policy |
          </a>
          @2023 QusaQus. All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
