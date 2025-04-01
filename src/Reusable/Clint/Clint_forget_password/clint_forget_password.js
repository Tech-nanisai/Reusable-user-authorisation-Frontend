import React, { useState } from "react";
import axios from "axios";
import "./clint_forget_password.css";

const ClintForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/forgot-password", {
        email,
      });

      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Try again!");
    }
  };

  return (
    <div className="clint-forget-password-container">
      {/* Forgot Password Image */}
      <div>
        <img
          src="https://res.cloudinary.com/drevfgyks/image/upload/v1739628485/tech%20nanisai/6325247_z2skjf.jpg"
          alt="Forgot Password"
          className="clint-forgot-password-image"
        />
      </div>

      {/* Forgot Password Box */}
      <div className="clint-forget-password-box">
        <h2 className="clint-forget-password-title">Forgot Password</h2>

        {/* Success & Error Messages */}
        {message && <p className="clint-success-message">{message}</p>}
        {error && <p className="clint-error-message">{error}</p>}

        {/* Form Section */}
        <form className="clint-forget-password-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="clint-forget-password-input"
          />
          <button type="submit" className="clint-forget-password-btn">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login Link */}
        <a href="/user-clint-login" className="clint-forget-password-link">
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default ClintForgetPassword;
