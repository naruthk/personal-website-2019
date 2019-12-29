import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

const Header = props => (
  <header className="navigation fixed-top nav-bg">
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        {props.siteName}
      </Link>
    </nav>
  </header>
);

export default Header;
