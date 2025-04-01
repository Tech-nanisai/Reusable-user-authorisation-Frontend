import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi"; // Spinner Icon
import "./clint_login.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const validateForm = () => {
  let newErrors = {};
  if (!formData.email.trim()) newErrors.email = "Email is required"; // FIXED: Use email
  if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:1992/login", formData);
      setSuccess(true);
      setTimeout(() => {
        Cookies.set("jwt_token", response.data.token, { expires: 7, secure: true, sameSite: "Strict" });
        navigate("/Client-dashboard");
      }, 2000);
    } catch (error) {
      setErrors({
        apiError: error.response?.data?.message || "Invalid credentials. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ClintLogin-UserLogin-main-container">
        <div>
            <img src="https://res.cloudinary.com/drevfgyks/image/upload/v1739528973/tech%20nanisai/Clinit_lx8qtn.png" 
            alt="clint-login-img"
            className="clint-login-img"/>
        </div>
        <div className="ClintLogin-UserLogin-box">
            <div className="ClintLogin-heading">
                <h5>Login Now</h5>
            </div>
            {success ? (
            <FaCheckCircle className="ClintLogin-UserLogin-success-icon" />
            ) : (
            <>
                <form onSubmit={handleSubmit} className="ClintLogin-UserLogin-form">
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`ClintLogin-UserLogin-input ${errors.username ? "error" : ""}`}
                    disabled={loading}
                />
                {errors.email && <span className="ClintLogin-UserLogin-error">{errors.email}</span>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`ClintLogin-UserLogin-input ${errors.password ? "error" : ""}`}
                    disabled={loading}
                />
                {errors.password && <span className="ClintLogin-UserLogin-error">{errors.password}</span>}

                {errors.apiError && <p className="ClintLogin-UserLogin-apiError">{errors.apiError}</p>}

                <button type="submit" className="ClintLogin-UserLogin-button" disabled={loading}>
                    {loading ? <BiLoaderCircle className="ClintLogin-UserLogin-spinner" /> : "Login"}
                </button>
                </form>

                <Link to="/user-clintforgetpassword" className="ClintLogin-UserLogin-forgot">Forgot Password?</Link>
                <Link to="/user-clint-register" className="ClintLogin-UserLogin-register">Create New Account</Link>
            </>
            )}
        </div>
    </div>
  );
};

export default UserLogin;
