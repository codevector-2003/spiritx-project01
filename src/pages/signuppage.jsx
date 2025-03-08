import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signuppage.css";
import { FaUser, FaLock } from "react-icons/fa";

const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState(""); // Authentication error message
    const [passwordStrength, setPasswordStrength] = useState(""); // Password strength message
    const [successMessage, setSuccessMessage] = useState(""); // Success message

    const validateUsername = (username) => {
        if (username.length < 8) return "Username must be at least 8 characters long";
        return "";
    };

    const validatePassword = (password) => {
        let strength = "";
        if (password.length >= 8) strength = "Weak";
        if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
            strength = "Strong";
        } else if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            strength = "Medium";
        }
        setPasswordStrength(strength);

        if (password.length < 8) return "Password must be at least 8 characters long";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
        if (!/[^a-zA-Z0-9]/.test(password)) return "Password must contain at least one special character";
        return "";
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (confirmPassword !== password) return "Passwords do not match";
        return "";
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setAuthError("");

        const newErrors = {
            username: validateUsername(username),
            password: validatePassword(password),
            confirmPassword: validateConfirmPassword(confirmPassword),
        };

        setErrors(newErrors);

        if (!newErrors.username && !newErrors.password && !newErrors.confirmPassword) {
            setSuccessMessage("Signup Successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 2000);
        } else {
            setAuthError("Please fix the errors before proceeding.");
        }
    };

    const handleloginClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        navigate('/LoginRegister'); // Navigate to the signup page
    };


    return (
        <div className="wrapper2">
            <div className="form-box signup">
                <form onSubmit={handleSignup}>
                    <h1>Sign Up</h1>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setErrors({ ...errors, username: validateUsername(e.target.value) });
                            }}
                            required
                        />
                        <FaUser className="icon" />
                        {errors.username && <p className="error-message">{errors.username}</p>}
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setErrors({ ...errors, password: validatePassword(e.target.value) });
                            }}
                            required
                        />
                        <FaLock className="icon" />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                        {password && <p className={`password-strength ${passwordStrength.toLowerCase()}`}>Strength: {passwordStrength}</p>}
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setErrors({ ...errors, confirmPassword: validateConfirmPassword(e.target.value) });
                            }}
                            required
                        />
                        <FaLock className="icon" />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                    </div>

                    {/* Authentication-related error message */}
                    {authError && <p className="auth-error">{authError}</p>}

                    {/* Success message after signup */}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    <button type="submit">Sign Up</button>

                    <div className="register-link">
                        <p>
                            Already have an account?{" "}
                            <a href="#" onClick={handleloginClick}>
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
