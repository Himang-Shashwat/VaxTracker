import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    //Add logic for resetting forgotten password.
    console.log(`Resetting password for email: ${email}`);
    setEmail('');
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      <p>Enter your email to receive a password reset link</p>
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
