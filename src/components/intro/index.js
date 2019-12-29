import React, { Fragment } from 'react';

import MaxWidth from '../ui/MaxWidth';
import Leafs from '../leafs';
import Button from '../ui/Button';
import Link from '../links';

import './style.scss';

const Intro = props => {
  const { hero, description, mailTo } = props.introduction;

  return (
    <Fragment>
      <MaxWidth className="Intro">
        <h2 className="Intro__greeting">Hello! 🚀</h2>
        <h1
          className="Intro__heading"
          dangerouslySetInnerHTML={{ __html: hero }}
        />
        <h3 className="Intro__subheading text-lighter">{description}</h3>
        <div className="Intro__call-to-action">
          <Link
            className="Link Link--is-button Intro__button"
            to={`mailto:${mailTo}`}
          >
            <Button
              className="Button Button--primary Button--size-xl Button--shape-rounded Button--box-shadow"
              message={'Get in touch'}
            />
          </Link>
        </div>
      </MaxWidth>
      <Leafs />
    </Fragment>
  );
};

export default Intro;
