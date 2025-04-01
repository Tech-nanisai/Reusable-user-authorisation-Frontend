import React, { useState } from "react";
import { FaUser, FaLock, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./admin-login.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === "Aettari sailu" && password === "Aettari*2025") {
        setSuccess(true);
        alert("✅ Login Successful!");
        navigate("/admin-dashboard")
      } else {
        alert("❌ Invalid Credentials");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="admin_login-container">
      <div className="admin_login-box">
        <h2 className="admin_login-heading">Admin Login</h2>
        <form className="admin_login-form" onSubmit={handleLogin}>
          <div className="admin_login-input-group">
            <FaUser className="admin_login-icon" />
            <input
              type="text"
              className="admin_login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
              required
            />
            <label className="admin_login-label">Username</label>
          </div>
          <div className="admin_login-input-group">
            <FaLock className="admin_login-icon" />
            <input
              type="password"
              className="admin_login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              required
            />
            <label className="admin_login-label">Password</label>
          </div>
          <button type="submit" className="admin_login-btn">
            {loading ? <span className="admin_login-spinner"></span> : "Login"}
          </button>
        </form>
        {success && <FaCheckCircle className="admin_login-success-icon" />}
      </div>
    </div>
  );
};

export default AdminLogin;
