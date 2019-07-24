import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

const Header = props => (
  <header className="navigation fixed-top nav-bg">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className="navbar-brand">
        {props.siteName}
      </Link>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div className="collapse navbar-collapse text-center" id="navigation">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  </header>
);

export default Header;
