import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const users = [
    { username: 'john', password: 'john123' },
    { username: 'randy', password: 'orton123' },
    { username: 'sachin', password: 'sachin123' },
    { username: 'rohit', password: 'rohit123' },
    { username: 'virat', password: 'virat123' },
    { username: 'trisha', password: 'trisha123' },
    { username: 'katrina', password: 'katrina123' },
    { username: 'priya', password: 'priya123' },
    { username: 'rahul', password: 'rahul123' },
    { username: 'ajay', password: 'ajay123' }
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
      // ✅ Successful login
      navigate('/resume');
    } else {
      // ❌ Invalid login
      setError(' Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p className="error-text">{error}</p>}
      <button onClick={handleLogin} className="btn">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}
