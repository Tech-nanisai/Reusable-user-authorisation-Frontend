import React, { useState } from "react";
import "./clint_navbar.css";
import {
    FaHome,
    FaUser,
    FaChartBar,
    FaEnvelope,
    FaLock,
    FaUpload,
    FaFileInvoice,
    FaUserCircle
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const ClientNavbar = () => {
    const [activeTab, setActiveTab] = useState("Dashboard");

    return (
        <div className="client_navbar-container">
            <div className="client_navbar-top">
                <div className="client_navbar-logo">COMPANY NAME</div>
                {/* Search Bar */}
                <div className="client_navbar-search">
                    <BiSearch className="client_navbar-search-icon" />
                    <input type="text" placeholder="Search..." className="client_navbar-search-input" />
                </div>
                {/* Navigation Menu */}
                <nav className="client_navbar-menu">

                    <a href="#" className={`client_navbar-item ${activeTab === "Dashboard" ? "active" : ""}`}
                        onClick={() => setActiveTab("Dashboard")}><FaHome /> Dashboard
                    </a>
                    <a href="#" className={`client_navbar-item ${activeTab === "Reports" ? "active" : ""}`}
                        onClick={() => setActiveTab("Reports")}>
                        <FaChartBar /> Reports Section
                    </a>
                    <a href="#" className={`client_navbar-item ${activeTab === "Messaging" ? "active" : ""}`}
                        onClick={() => setActiveTab("Messaging")}>
                        <FaEnvelope /> Messaging System
                    </a>
                    <a href="#" className={`client_navbar-item ${activeTab === "Security" ? "active" : ""}`}
                        onClick={() => setActiveTab("Security")}>
                        <FaLock /> Security & Auth
                    </a>
                    <a href="#" className={`client_navbar-item ${activeTab === "Upload" ? "active" : ""}`}
                        onClick={() => setActiveTab("Upload")}>
                        <FaUpload /> Upload & Download
                    </a>
                    <p  className={`client_navbar-item ${activeTab === "Billing" ? "active" : ""}`}
                        onClick={() => setActiveTab("Billing")}>
                        <FaFileInvoice /> Billing & Invoices
                    </p>

                </nav>
            </div>
            {/* Profile Section */}
            <div className="client_navbar-profile">
                <FaUserCircle className="client_navbar-profile-pic" />
                <span className="client_navbar-username">Profile</span>
            </div>
        </div>
    );
};

export default ClientNavbar;
