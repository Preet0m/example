import React from 'react';
import logo from '../images/logo.png';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdDinnerDining } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { Link as ScrollLink } from 'react-scroll'; // for smooth scroll to top
import { Link } from 'react-router-dom'; // for navigation

import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <img src={logo} alt="logo" />
            <h2><strong> SOFTMUSK </strong></h2>
          </div>
          
          {/* Scroll to top when clicked */}
          <ScrollLink to="top" spy={true} smooth={true} duration={500}>
            <MdKeyboardArrowUp className='icon___i' />
          </ScrollLink>
        </div>
        
        <div className="col-container">
          <div className="col">
            <h5>Softmusk Info Pvt. Ltd. (Main Branch)</h5>
            <h6 className='bss__footer'>_</h6>
            <p>3rd floor, Adishakti Constructions, Fire Brigade Station, opposite of Fire Brigade, Shastri Nagar, Shahapur, Belagavi, Karnataka 590001
              <h5>Nipani Branch</h5>
              <p>KSRTC BUSTAND, NEAR, opp. SBI ATM, Nipani, Karnataka 591237</p>
              +91 8971020906 / +91 9591211023 / +91 9742803658
            </p>
          </div>

          {/*<div className="col">
            <h5>Company</h5>
            <h6 className='bss__footer'>_</h6>
            <Link to="#"><p><BiChevronRight /> Terms & Conditions</p></Link>
            <Link to="#"><p><BiChevronRight /> Privacy Policy</p></Link>
            <Link to="/support"><p><BiChevronRight /> Support</p></Link>
            <Link to="/faq"><p><BiChevronRight /> FAQ</p></Link>
          </div>*/}

          <div className="col">
            <h5>Quick Links</h5>
            <h6 className='bss__footer'>_</h6>
            {/* Add smooth scroll functionality */}
            <Link to="/services"><p><BiChevronRight /> Services</p></Link>
            <Link to="/portfolio"><p><BiChevronRight /> Portfolio</p></Link>
            <Link to="/contact"><p><BiChevronRight /> Contact</p></Link>
          </div>

          <div className="col">
            <h5>Connect with Us</h5>
            <h6 className='bss__footer'>_</h6>
            <Link to="/about"><p><BiChevronRight /> Facebook</p></Link>
            <Link to="/about"><p><BiChevronRight /> Twitter</p></Link>
            <Link to="/about"><p><BiChevronRight /> LinkedIn</p></Link>
          </div>

          <div className="col">
            <h5>Office Hours</h5>
            <h6 className='bss__footer'>_</h6>
            <p>Mon-Sat: 09 a.m - 06 p.m (GMT + 05:30)</p>
            <p>Sunday Closed</p>
            <MdDinnerDining className='spoon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
