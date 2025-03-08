import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginRegister = () => {
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault(); // Prevent the default link behavior
        navigate('/Signup'); // Navigate to the signup page
    };

    return (
        <div className='wrapper'>
            <div className='form-box login'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box1'>
                        <input type="text" placeholder='username' required />
                        <FaUser className='icon'></FaUser>
                    </div>
                    <div className='input-box1'>
                        <input type="password" placeholder='password' required />
                        <FaLock className='icon'></FaLock>
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox'></input>
                            Remember Me
                        </label>
                        <a href="">Forgot password</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href='#' onClick={handleRegisterClick}>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default LoginRegister;
