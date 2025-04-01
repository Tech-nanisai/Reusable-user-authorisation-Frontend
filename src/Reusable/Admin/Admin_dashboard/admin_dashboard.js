import React, { useState } from "react";
import "./admin_dashboard.css";
import AdminNavbar from "../Admin_navbar/admin_navbar";
import AdminReportsClient from "../Admin_reports-client/Admin_reports-client";
import IDGeneration from "../IDGeneration/IDGeneration";

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState("Dashboard");

    return (
        <div className="admin-dashboard-container">
            <AdminNavbar setActiveSection={setActiveSection} />            
            <div className="admin-dashboard-content">
                {activeSection === "LastUpdates" && <AdminReportsClient />}
                {activeSection === "ClientManagement" && <AdminReportsClient />}
                {activeSection === "IDGeneration" && <IDGeneration />}
                {/* Add other components as needed */}
            </div>
        </div>
    );
};

export default AdminDashboard;
