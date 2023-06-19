import React from 'react';
import { Route, Router } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import RegistrationPage from './RegistrationPage';
import ForgotPassword from './ForgotPassword';
import RegistrationSuccessfulPage from './RegistrationSuccessfulPage';

const App = () => {
  return (
    <Router>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/register" element={<RegistrationPage />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      <Route path="/registrationsuccessful" element={<RegistrationSuccessfulPage />}></Route>
    </Router>
  );
};

export default App;
