import React, { Fragment } from 'react';

import Social from '../social';

import dotsGroupOrange from '../../assets/images/dots-group-orange.svg';
import dotsOrange from '../../assets/images/dots-orange.svg';
import leafCyan2 from '../../assets/images/leaf-cyan-2.svg';
import leafCyan from '../../assets/images/leaf-cyan.svg';
import leafOrange from '../../assets/images/leaf-orange.svg';
import leafPinkRound from '../../assets/images/leaf-pink-round.svg';
import leafYellow from '../../assets/images/leaf-yellow.svg';

import './style.scss';

const renderLeafs = () => (
  <Fragment>
    <div className="layer" id="l2">
      <img src={leafCyan} alt="bg-shape" />
    </div>
    {/* <div className="layer" id="l3">
      <img src={leafOrange} alt="bg-shape" />
    </div> */}
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

const Hero = props => (
  <section className="hero-area " id="parallax">
    <div className="container">
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <h1 className=" font-tertiary">
            Hi! I'm <span className="animated-pulsing">Naruth</span>, a Full
            Stack Web Developer
          </h1>
        </div>
      </div>
    </div>
    {renderLeafs()}
    <Social />
  </section>
);

export default Hero;