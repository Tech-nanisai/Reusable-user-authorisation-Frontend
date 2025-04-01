// src/Reusable/Clint/clint_register/clint_register.js

import React, { useState } from "react";
import axios from "axios";
import "./clint_register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate Form Dynamically
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid 10-digit Phone Number";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid Email Address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post("https://www-nanisai-com-backend-code.onrender.com/register", formData);

      setSuccessMessage("Registration Successful! Please login.");
      setFormData({ fullName: "", phoneNumber: "", email: "", password: "" });
      setErrors({});

      setTimeout(() =>{
        navigate("/user-clint-login")
      }, 3000);

    } catch (error) {
      setErrors({
        apiError: error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ClintRegister-UserRegister-main-container">
      <div>
        <img 
          src="https://res.cloudinary.com/drevfgyks/image/upload/v1739528973/tech%20nanisai/Clinit_lx8qtn.png" 
          className="ClintRegister-image" 
          alt="User Registration"
        />
      </div>
      <div className="ClintRegister-UserRegister-container">
        <h2>User Registration</h2>

        {successMessage && <p className="ClintRegister-UserRegister-success">{successMessage}</p>}
        {errors.apiError && <p className="ClintRegister-UserRegister-error">{errors.apiError}</p>}

        <form onSubmit={handleSubmit} className="ClintRegister-UserRegister-form">
          <div className="ClintRegister-UserRegister-input-container">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="ClintRegister-UserRegister-error">{errors.fullName}</span>}
          </div>

          <div className="ClintRegister-UserRegister-input-container">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="ClintRegister-UserRegister-error">{errors.phoneNumber}</span>}
          </div>

          <div className="ClintRegister-UserRegister-input-container">
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="ClintRegister-UserRegister-error">{errors.email}</span>}
          </div>

          <div className="ClintRegister-UserRegister-input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="ClintRegister-UserRegister-error">{errors.password}</span>}
          </div>
        
          <button type="submit" className="ClintRegister-UserRegister-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <Link to="/user-clint-login" className="ClintRegister-UserRegister-link">
          I have an account
        </Link>
      </div>
    </div>
  );
};

export default UserRegister;
