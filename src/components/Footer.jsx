import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-4">
          <img src="logo-path.png" alt="Mumair Logo" className="mx-auto mb-2" />
          <h2 className="text-xl font-semibold text-gray-700">Mumair</h2>
        </div>
        
        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-gray-600">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Me</a></li>
            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
            <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </nav>
        
        {/* Social Media Icons */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-600 hover:text-orange-500" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-orange-500" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-orange-500" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-600 hover:text-orange-500" />
              </a>
            </li>
          </ul>
        </div>
        
        {/* Copyright Section */}
        <div className="bg-gray-800 py-4">
          <p className="text-gray-400 text-sm">&copy; 2023 <span className="text-orange-500">Mumair</span>. All Rights Reserved, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
