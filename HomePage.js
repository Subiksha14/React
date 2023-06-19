import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Gym Management System</h1>
      </header>
      <main>
        <div className="hero-image"></div>
        <div className="content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tellus sed mi pulvinar vulputate
            eget vel lectus. Vestibulum in mauris eu urna consequat bibendum eu eu tortor. Nulla facilisi. Aliquam
            dignissim libero a erat vestibulum malesuada. Nullam rutrum dolor sit amet erat finibus sollicitudin.
            Curabitur ultricies tempor mi, at tristique tortor volutpat et. Sed commodo sem vel elit vulputate, eu
            fringilla justo pharetra.
          </p>
          <Link to="/RegistrationPage">
          <button className="btn">Register</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
