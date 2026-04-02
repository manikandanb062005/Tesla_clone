import React from "react";

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#privacy">Privacy & Legal</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#locations">Locations</a></li>
        </ul>
        <p className="footer-copy">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
