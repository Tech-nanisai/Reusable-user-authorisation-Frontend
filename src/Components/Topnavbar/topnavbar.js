import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Sidebar from '../Sidenavbar/Sidenavbar';
import CompanyLogo from '../Images/TechnanisaiPNG.png';
import './topnavbar.css';

const Topbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userType, setUserType] = useState('Select User');
  const navigate = useNavigate(); // Hook for navigation

  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setUserType(selectedValue); // Update state

    if (selectedValue === "/") {
      navigate("/"); // Navigate to Home
    } else if (selectedValue === "clint-login") {
      navigate("/user-clint-login"); // Change accordingly
    } else if (selectedValue === "studen-login") {
      navigate("/student-login"); // Change accordingly
    } else if (selectedValue === "admin-login") {
      navigate("/user-admin"); // Change accordingly
    }
  };
  const handleHomeNavigation = () => {
    setUserType("/"); // Set 'User Login' active
    navigate("/");
  };

  return (
    <div>
      <div className="Topnav-top-navbar">
        <div className="Topnav-content-container">
          <Link to="/" className="Topnav-CompanyLogo-container" onClick={handleHomeNavigation}>
            <img src={CompanyLogo} className="Topnav-logo" alt="Logo" />
            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1730038268/Screenshot_2024-10-27_193058_agcdyd.png" 
            className="Topnav-company-nametext" alt="Company Name" />
          </Link>          
          <div className="Topnav-menu-links">
            <Link to="/" className="Topnav-menu-link" onClick={handleHomeNavigation}>Home</Link>
            {/* Services Dropdown */}
            <div
              className="Topnav-menu-link" 
              onMouseEnter={() => setIsDropdownOpen(true)} 
              onMouseLeave={() => setIsDropdownOpen(false)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? 'true' : 'false'}
              role="button"
            >
              Services
              {isDropdownOpen && (
                <div className="Topnav-dropdown">
                  <Link to="/services/learn" className="Topnav-dropdown-link">Learn Port</Link>
                  <Link to="/ui-ux-design" className="Topnav-dropdown-link">UI/UX Design</Link>
                  <Link to="/services/web-development" className="Topnav-dropdown-link">Web Application</Link>
                  <Link to="/services/api-development" className="Topnav-dropdown-link">API Development</Link>                  
                  <Link to="/services/maintenance-support" className="Topnav-dropdown-link">Mainten & Support</Link>
                  <Link to="/services/clint-reports" className="Topnav-dropdown-link">Clint login</Link>
                </div>
              )}
            </div>
            <Link to="/portfolio" className="Topnav-menu-link">Portfolio</Link>
            <Link to="/testimonials" className="Topnav-menu-link">Testimonials</Link>
            <Link to="/contact" className="Topnav-menu-link">Contact</Link>
            <div className="topnav-user-login-container">
              <div className="topnav-user-icon-btn">
                <FaUserCircle size={22} className='FaUserCircle'/>
                <select className="topnav-user-dropdown" value={userType} onChange={handleSelect}>
                  <option value="/">User Login</option>
                  <option value="clint-login">Clint Login</option>
                  <option value="studen-login">Studen Login</option>
                  <option value="admin-login">admin-login</option>
                </select>
              </div>            
            </div>          
          </div>
        </div>
        <div className="Topnav-menu-toggle" onClick={handleSidebarToggle}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
        <img src='https://res.cloudinary.com/drevfgyks/image/upload/v1730038268/Screenshot_2024-10-27_193058_agcdyd.png' 
        alt='sidebar-logo' className='sidebar-logo'/>        
      </div>      
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleSidebarToggle} />
    </div>
  );
};

export default Topbar;
