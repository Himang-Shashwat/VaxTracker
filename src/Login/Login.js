import React, { useState } from 'react';
import '../Login/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const mockLogin = async () => {
    // Actual API call here
    console.log(`Username: ${username} and Password: ${password}`);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={mockLogin}>Login</button>

      <div className="additional-text">
        <p>
          <a href ="/forgot-password">Forgot your Password?</a>
        </p>
        <p>
          <p> New User? </p><a href ="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
