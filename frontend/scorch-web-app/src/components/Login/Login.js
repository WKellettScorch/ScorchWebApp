// frontend/components/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import ScorchLogo from '../../assets/images/Scorch_200x100.png';
import { login } from '../../api/LoginAPI';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Add state for error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { clientId, token } = await login(username, password);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
        setErrorMessage(error.message || 'Login failed due to an unexpected error.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-branding">
        <img src={ScorchLogo} alt="Scorch SEO" />
        <h1>Welcome to Scorch SEO</h1>
      </div>
      {errorMessage && <div className="login-error">{errorMessage}</div>} {/* Display error message */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
