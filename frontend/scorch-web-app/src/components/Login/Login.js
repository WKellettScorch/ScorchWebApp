import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import ScorchLogo from '../../assets/images/Scorch_200x100.png'; // Ensure path is correct
import { login } from '../../api/LoginAPI'; // Ensure path is correct

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { clientId, token } = await login(username, password);
      localStorage.setItem('token', token); // Save the token
      console.log("Login successful for clientId:", clientId); // Demonstrates potential use of clientId

      // Optionally, use clientId for further logic, e.g., fetching user details
      // This is where you might use clientId, depending on your app's requirements

      navigate('/home'); // Navigate to the home page after login
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-branding">
        <img src={ScorchLogo} alt="Scorch SEO" />
        <h1>Welcome to Scorch SEO</h1>
      </div>
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
