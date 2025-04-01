import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import './Student_login.css';

const StudentLogin = () => {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const [isValidId, setIsValidId] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Validate Student ID
    const validateStudentId = async (id) => {
        try {
            const response = await axios.get(`http://localhost:1992/api/id-generation/verify-id/${id}`);
            setIsValidId(response.status === 200 && response.data.isValid);
        } catch (error) {
            setIsValidId(false);
        }
    };

    // Handle Form Submission
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");
    
        if (!studentId || !password) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
    
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:1992/api/student/login", { 
                studentId: studentId.trim().toUpperCase(), 
                password 
            });
    
            if (response.status === 200) {
                setTimeout(() => navigate("/student_reports"), 3000);  // Change 30000 to 3000 (30 sec → 3 sec)
            } else {
                setErrorMessage("Invalid Student ID or Password.");
                setIsLoading(false);
            }
        } catch (error) {
            setErrorMessage("Invalid Student ID or Password.");
            setIsLoading(false);
        }
    };    

    return (
        <div className="StudentLogin-main-container">
            <form className="StudentLogin-form-container" onSubmit={handleLogin}>
                <h3 className="StudentLogin-heading">Student Login</h3>

                <label htmlFor="studentId" className="StudentLogin-label">Student ID</label>
                <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    placeholder="Enter your Student ID"
                    className={`StudentLogin-inputBox ${isValidId === null ? "" : isValidId ? "StudentLogin-valid-id" : "StudentLogin-invalid-id"}`}
                    value={studentId}
                    onChange={async (e) => {
                        const formattedId = e.target.value.trim().toUpperCase();
                        setStudentId(formattedId);
                        setErrorMessage("");
                        await validateStudentId(formattedId);
                    }}
                    required
                />
                {isValidId && <p className="StudentLogin-success-message">✔ Verified</p>}
                {!isValidId && isValidId !== null && <p className="StudentLogin-error-message">Invalid Student ID</p>}

                <label htmlFor="password" className="StudentLogin-label">Password</label>
                <div className="StudentLogin-password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="StudentLogin-inputBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="StudentLogin-eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                {errorMessage && <p className="StudentLogin-error-message">{errorMessage}</p>}

                <button type="submit" className="StudentLogin-button" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
                <Link to="/student-auth" className="Createstudenaccount">Create Student Account</Link>
            </form>
        </div>
    );
};

export default StudentLogin;