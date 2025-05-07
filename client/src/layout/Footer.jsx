import React from "react";
import "../styles/Footer.css";
import linkedinIcon from "./linkedin.png";
import instagramIcon from "./instagram.png";
import mastercardIcon from "./mastercard.png";
import gpayIcon from "./gpay.png";
import applepayIcon from "./applepay.png";
import paypalIcon from "./paypal.png";
const Footer = () => {
  return (
    
        <footer className="footer">
    <div className="footer-top">
      <div className="newsletter">
        <h3>Be the first to know</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div >
          <input type="email" placeholder="Enter your e-mail..." />
          
            
        </div>
      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
      </div>
    </div>

    <div className="footer-links">
      <div>
        <h4>mettā muse</h4>
        <ul>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
        <div className="footer-social">
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </div>

      <div>
        <h4>mettā muse ACCEPTS</h4>
        <div className="footer-payment">
          <img src={gpayIcon} alt="Google Pay" />
          <img src={mastercardIcon} alt="MasterCard" />
          <img src={paypalIcon}alt="PayPal" />
          
          <img src={applepayIcon} alt="Apple Pay" />
         
        </div>
      </div>
    </div>

    <div className="footer-copyright">
      Copyright © 2023 mettamuse. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
