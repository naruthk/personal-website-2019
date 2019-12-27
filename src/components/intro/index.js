import React from 'react';

import MaxWidth from '../ui/MaxWidth';
import Button from '../ui/Button';

import './style.scss';

const Intro = props => (
  <MaxWidth className="Intro">
    <h2 className="Intro__greeting">Hello! 🚀</h2>
    <h1 className="Intro__heading">
      I'm Naruth Kongurai.
      <br />I create things for the web.
    </h1>
    <h3 className="Intro__subheading">{props.subheading}</h3>
    <div className="Intro__call-to-action">
      <a
        class="Link Link--is-button Intro__button"
        href="mailto:nkongurai@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button
          className="Button Button--size-xl Button--shape-rounded"
          message={'Get in touch'}
        />
      </a>
    </div>
  </MaxWidth>
);

export default Intro;
