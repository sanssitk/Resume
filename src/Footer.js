import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="legal__title">
        Sanjay B Shrestha @ 2020 All Rights Reserved
      </p>
      <p>Legal Name: Sanjay B Shrestha</p>
      <p>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/s-shrestha-020986168/">
          https://www.linkedin.com/in/s-shrestha
        </a>
      </p>
      <p>
        Email:
        <a href="mailto:sanssitk@gmail.com?subject=Hi%20Sanjay">
          sanssitk@gmail.com
        </a>
      </p>
      <p>
        Phone: <a href="tel:+1-704-890-4961">+1 (704) 890-4961</a>
      </p>
      <p>
        Whatsapp:<a href="https://wa.me/17048904961"> https://wa.me/17048904961</a>
      </p>
    </div>
  );
}

export default Footer;
