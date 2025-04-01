import React, { useState } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidenavbar.css';
import CompanyLogo from '../Images/TechnanisaiPNG.png'; // Update the path to your logo

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const handleSubmenuClick = (action) => {
    action();
    toggleSidebar();
  };

  const handleUserProfileClick = () => {
    toggleSidebar(); // Close the sidebar when user profile is clicked
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="Topnav-content-container">
        <Link to="/" className="Topnav-CompanyLogo-container" onClick={toggleSidebar}>
        <Link to="/"><img src={CompanyLogo} className="Topnav-logo" alt="Logo" /></Link>
          <span className="Topnav-company-nametext">Company Name</span> {/* Replace with actual company name */}
        </Link>

        <div className="Topnav-menu-toggle" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className="sidebar-content">
        <ul className="menu">
          <Link to="/" className='LinkStyle'>
            <li onClick={toggleSidebar}>HOME</li>
          </Link>
          <li onClick={handleServicesToggle} className="LinkStyle">
            SERVICES
            {isServicesOpen && (
              <ul className="submenu">
                <Link to="/services/web-development" className='LinkStyle'>
                  <li onClick={() => handleSubmenuClick(toggleSidebar)}>Web Application</li>
                </Link>
                <Link to="/services/api-development" className='LinkStyle'>
                  <li onClick={() => handleSubmenuClick(toggleSidebar)}>API Development</li>
                </Link>
                <Link to="/services/learn" className='LinkStyle'>
                  <li onClick={() => handleSubmenuClick(toggleSidebar)}>Learn Port</li>
                </Link>
                <Link to="/services/ui-ux-design" className='LinkStyle'>
                  <li onClick={() => handleSubmenuClick(toggleSidebar)}>UI/UX Design</li>
                </Link>
                <Link to="/services/maintenance-support" className='LinkStyle'>
                  <li onClick={() => handleSubmenuClick(toggleSidebar)}>Maintenance and Support</li>
                </Link>
              </ul>
            )}
          </li>
          <Link to="/portfolio" className='LinkStyle'>
            <li onClick={toggleSidebar}>PORTFOLIO</li>
          </Link>
          <Link to="/testimonials" className='LinkStyle'>
            <li onClick={toggleSidebar}>TESTIMONIALS</li>
          </Link>
          <Link to="/contact" className='LinkStyle'>
            <li onClick={toggleSidebar}>CONTACT</li>
          </Link>
        </ul>
        <Link to="/userprofile" className='LinkStyle'>
          <div className="user-profile2" onClick={handleUserProfileClick}>
            <FaUser />
            <span>User Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
