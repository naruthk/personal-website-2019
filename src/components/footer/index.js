import React from 'react';

import MaxWidth from '../ui/MaxWidth';

import './style.scss';

const Footer = () => (
  <MaxWidth className="Footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <h1 className="Footer__call-to-action--heading">Have a question?</h1>
          <h3>Let me know 📣 !</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <p className="Footer__label Footer__label--uppercase">Say Hi</p>
          <p className="Footer__label Footer__label--highlight">
            nkongurai@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div className="Footer__copyright">
      <p>&copy; 2020 — Designed and developed by Naruth Kongurai</p>
    </div>
  </MaxWidth>
);

export default Footer;
