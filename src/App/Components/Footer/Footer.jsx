import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-around h-40">
        {/* Social Media Icons */}
        <div className="flex items-center">
          <a href="#" className="text-white hover:text-gray-400 mr-8">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mr-8">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mr-8">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mr-8">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mr-8">
            <FaYoutube size={24} />
          </a>
          {/* Add more social media icons as needed */}
        </div>
       
        <div className="text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
