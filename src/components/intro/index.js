import React, { Fragment } from 'react';

import MaxWidth from '../ui/MaxWidth';
import Button from '../ui/Button';
import Link from '../links';

import dotsGroupOrange from '../../assets/images/dots-group-orange.svg';
import dotsOrange from '../../assets/images/dots-orange.svg';
import leafCyan2 from '../../assets/images/leaf-cyan-2.svg';
import leafCyan from '../../assets/images/leaf-cyan.svg';
import leafOrange from '../../assets/images/leaf-orange.svg';
import leafPinkRound from '../../assets/images/leaf-pink-round.svg';
import leafYellow from '../../assets/images/leaf-yellow.svg';

import './style.scss';

const Intro = props => (
  <Fragment>
    <MaxWidth className="Intro">
      <h2 className="Intro__greeting">Hello! 🚀</h2>
      <h1 className="Intro__heading">
        I'm Naruth Kongurai.
        <br />I create things for the web.
      </h1>
      <h3 className="Intro__subheading text-lighter">{props.subheading}</h3>
      <div className="Intro__call-to-action">
        <Link
          className="Link Link--is-button Intro__button"
          to={'mailto:nkongurai@gmail.com'}
        >
          <Button
            className="Button Button--primary Button--size-xl Button--shape-rounded"
            message={'Get in touch'}
          />
        </Link>
      </div>
    </MaxWidth>
    {renderLeafs()}
  </Fragment>
);

export default Intro;

const renderLeafs = () => (
  <Fragment>
    <div className="layer" id="l2">
      <img src={leafCyan} alt="bg-shape" />
    </div>
    <div className="layer" id="l4">
      <img src={dotsOrange} alt="bg-shape" />
    </div>
    <div className="layer" id="l5">
      <img src={leafYellow} alt="bg-shape" />
    </div>
    <div className="layer" id="l6">
      <img src={leafCyan} alt="bg-shape" />
    </div>
    <div className="layer" id="l7">
      <img src={dotsGroupOrange} alt="bg-shape" />
    </div>
    <div className="layer" id="l8">
      <img src={leafPinkRound} alt="bg-shape" />
    </div>
    <div className="layer" id="l9">
      <img src={leafOrange} alt="bg-shape" />
    </div>
  </Fragment>
);
