import React, { useState,useEffect  } from 'react';
import '../css/auth_style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);
  
    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
    // Function to handle login button click
    const handleLogin = () => {
     // Validate email and password
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // Send login request to server
    axios.post('http://localhost:8000/login', { email, password })
      .then(res => {
        if (res.data === "notexist") {
          setError('User not found');
        } else if (res.data === "incorrect password") {
          setError('Incorrect password');
        } else if (res.data === "server error") {
          setError('Server error. Please try again later.');
        } else {
          // Login successful
          const isAdmin = email.trim().toLowerCase().startsWith("admin@");
          //onLogin({ isAdmin });
          if (isAdmin) {
            history("/admin",{state:{ userData: res.data }});
          } else {
            history("/home",{state:{ userData: res.data }});
          }
        }
      })
      .catch(err => {
        console.error('Error logging in:', err);
        setError('Failed to login. Please try again later.');
      });
  };
  
    return (
      <body id="logbody">
      <div className="container">
        <div className="design">
          <div className="pill-1 rotate-45"></div>
          <div className="pill-2 rotate-45"></div>
          <div className="pill-3 rotate-45"></div>
          <div className="pill-4 rotate-45"></div>
        </div>
        <div className="login">
          <img className="logo" src="logo-colored.svg" alt="" />
          <h1 className="head">AUMS</h1>
          <h2 className="title">Login</h2>
          <div className="text-input">
            <i className="ri-user-fill"></i>
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill"></i>
            <input
              type={passwordVisible ? "text" : "password"}
              id="passwordInput"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="togglePassword" onClick={togglePasswordVisibility}>
              <i className={passwordVisible ? "ri-eye-off-fill" : "ri-eye-fill"} style={{border: "none"}}></i>
            </button>
          </div>
          {error && <div className="error">{error}</div>}
          <button className="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
          <a href="#" className="forgot">Forgot Username/Password?</a>
          <div className="create">
            {/* <a href="signup.html">Create Your Account</a>
            <i className="ri-arrow-right-fill"></i> */}
          </div>
        </div>
        </div>
      </body>
    );
  }
  
  export default Login;