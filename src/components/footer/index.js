import React from 'react';

import Social from '../social';

import './style.scss';

const Footer = () => (
  <footer className="bg-dark footer-section">
    <div className="text-center py-5">
      <Social isFooter />
    </div>
    <div className="text-center py-5 px-4">
      <p className="mb-5 text-light">
        &copy; 2019 | Naruth Kongurai
        <br />
        View the source code on{' '}
        <a
          href="https://www.github.com/naruthk"
          target="_blank"
          title="Naruth GitHub"
          className="text-light bold"
        >
          Github
        </a>
        . Developed using Gatsby and React.
      </p>
    </div>
  </footer>
);

export default Footer;
