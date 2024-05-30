import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">MERN Blog</h2>
          <p>
            A full stack blog platform built with MongoDB, Express.js, React, and Node.js. Share your thoughts and connect with others.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/write">Write</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MERN Blog | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
