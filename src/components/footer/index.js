import React from 'react';

import MaxWidth from '../ui/MaxWidth';
import Link from '../links';

import './style.scss';

const Footer = () => (
  <MaxWidth className="Footer">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <h2 className="Footer__call-to-action--heading">Have a question?</h2>
          <div className="Footer__call-to-action--illustration" />
        </div>
        <div className="col-xs-12 col-sm-12 col-lg-6">
          <div className="Footer__contact-information">
            <p className="Footer__label Footer__label--uppercase">Say Hi</p>
            <Link to={'mailto:nkongurai@gmail.com'}>
              <p className="Footer__label Footer__label--highlight">
                nkongurai@gmail.com
              </p>
            </Link>
            <p className="Footer__label Footer__label--uppercase">GitHub</p>
            <Link to={'https://www.github.com/naruthk'} doOpenInNewTab>
              <p className="Footer__label Footer__label--highlight">
                github.com/naruthk
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="Footer__copyright">
      <p>&copy; 2020 — Designed and developed by Naruth Kongurai</p>
    </div>
  </MaxWidth>
);

export default Footer;
