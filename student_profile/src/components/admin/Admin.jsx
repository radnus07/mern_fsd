import React, { useState } from 'react';
import axios from 'axios';
import '../css/Admin.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rno, setRno] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  const location = useLocation();
  const userData = location.state.userData;
  const name = userData.name;
  console.log(name)

  const addUser = () => {
    // Validate email, roll number, and password
    if (!email.trim() || !password.trim() || !rno.trim()) {
      setError('Please enter email, roll number, and password');
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
    if (!rno.trim()) {
      setError('Please enter your roll number');
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

    // Send user data to server
    axios.post('http://localhost:8000/register', { email, rno, password })
      .then(res => {
        console.log('User created successfully:', res.data);
        // Clear input fields after successful registration
        setEmail('');
        setPassword('');
        setRno('');
        setError('');
      })
      .catch(err => {
        console.error('Error registering user:', err);
        setError('Failed to register user. Please try again later.');
      });
  };
  
  const logout =() => {
    history("/login")
  }

  return (
    <div className='admin-container'>
      <div className='admin-heading'>
      <h1>AUMS</h1>
      <h2>Admin</h2>
      <h3>{name}</h3>
      <button className='admin-heading__logout-btn' onClick={logout}>Logout</button>
      </div>
      <div className='addStuContaineer'>
      <h3>Add Students</h3>
      <div  className='admin-form'>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div> 
      <div>
        <label>Password:</label> 
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Roll Number:</label> 
        <input type="text" value={rno} onChange={e => setRno(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={addUser}>Add User</button>
      </div>
      </div>
    </div>
  );
}

export default Admin;
