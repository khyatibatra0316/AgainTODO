import React from "react";
import "./Navbar.css";
import Logo from './Logo.jpeg';
import Image5 from './Image6.jpeg'
import Image2 from './Image2.jpeg'
import Image3 from './Image3.jpeg'
import Image4 from './Image4.jpeg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#">Made For ▾</a>
            <div className="dropdown-content">
              <a href="#">Students</a>
              <a href="#">Adults</a>
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Resources ▾</a>
            <div className="dropdown-content">
              <a href="#">Productivity Methods</a>

              <div className="dropdown-submenu">
                <a href="#">Help Center ▸</a>
                <div className="dropdown-submenu-content">
                  <a href="tel:+911234567890">Phone: +91 1234567890</a>
                  <a href="tel:+919876543210">Phone: +91 9876543210</a>
                  <a href="mailto:support@example.com">Email: support@example.com</a>
                </div>
              </div>

              <a href="#">Blog</a>
              <a href="#">Templates</a>
            </div>
          </li>

          <li><a href="#">Premium for 100rs</a></li>
        </ul>
      </div>
    </nav>
    <div className="tracker" style={{color:'white'}}>Your ultimate task tracker</div>
    <div className="images-container">
      <img src={Image5} alt="I1" className="image-item"/>
      <img src={Image2} alt="I2" className="image-item"/>
      <img src={Image3} alt="I3" className="image-item"/>
      <img src={Image4} alt="I4" className="image-item"/>
      
    </div>
    <div className="login-container">
    <Link to="/login" className="login-text">Login</Link> 
          
        </div>
    </>
  );
};

export default Navbar;
