import React from "react";
import { Link } from "react-router-dom";
import {
  FaMailBulk,
  FaPhone,
  FaMapPin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Eduruz from "../../assets/Eduruz.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={Eduruz} style={{ width: 80, height: 50 }} />
            </div>
            <p className="text-neutral-300 mb-6">
              Transforming education through innovative learning approaches and
              professional development.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-300 hover:text-primary-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-primary-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-primary-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-300 hover:text-primary-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 hover:text-primary-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-primary-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-neutral-300 hover:text-primary-500 transition-colors"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-neutral-300 hover:text-primary-500 transition-colors"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapPin
                  size={20}
                  className="text-primary-500 mt-1 mr-3 flex-shrink-0"
                />
                <span className="text-neutral-300">
                  Eduruz, Shanti Niwas Apartment, 1st Floor
                  Near Bhagat Singh More, Asansol
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone
                  size={20}
                  className="text-primary-500 mr-3 flex-shrink-0"
                />
                <span className="text-neutral-300">(+91) 9474113837</span>
              </li>
              <li className="flex items-center">
                <FaMailBulk
                  size={20}
                  className="text-primary-500 mr-3 flex-shrink-0"
                />
                <span className="text-neutral-300">hello@eduruz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2025 LearnWell Academy. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-neutral-400 text-sm hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-neutral-400 text-sm hover:text-primary-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-neutral-400 text-sm hover:text-primary-500 transition-colors"
            >
              Sitemap
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
