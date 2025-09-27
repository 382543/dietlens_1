import React from 'react';
import logo from '../assets/logo.png';  // Make sure this path is correct

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="PCOD Buddy Logo" />

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/lifestyle">Lifestyle</a></li>
        <li><a href="/camera">Camera</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>

      
    </div>
  );
};

export default Navbar;
