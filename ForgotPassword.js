// ForgotPassword.js

import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    // Perform email verification logic here

    // Move to step 2
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    // Perform verification code validation logic here

    // Move to step 3
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Perform password reset logic here

    // Reset form fields and move to step 1
    setEmail('');
    setVerificationCode('');
    setNewPassword('');
    setConfirmPassword('');
    setStep(1);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {step === 1 && (
        <form onSubmit={handleStep1Submit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleStep2Submit}>
          <input
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit">Confirm</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <p>Your password has been reset successfully.</p>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
