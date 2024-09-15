import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <div className="header-container">
      <img
        src="https://images-platform.99static.com/0AbsNnQlTwX4EZVub25_1aC3K88=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/96/96134/attachment_96134165"
        alt="Student Hub Logo"
        className="logo"
      />
      <h1 className="title pt-4">Student Hub</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
