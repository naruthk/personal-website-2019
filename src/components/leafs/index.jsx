import React from 'react';

import dotsGroupOrange from '../../assets/images/dots-group-orange.svg';
import dotsOrange from '../../assets/images/dots-orange.svg';
import leafCyan from '../../assets/images/leaf-cyan.svg';
import leafOrange from '../../assets/images/leaf-orange.svg';
import leafPinkRound from '../../assets/images/leaf-pink-round.svg';
import leafYellow from '../../assets/images/leaf-yellow.svg';

import './style.scss';

const Leafs = () => (
  <div className="Leafs">
    <div className="Leafs__layer" id="l2">
      <img src={leafCyan} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l4">
      <img src={dotsOrange} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l5">
      <img src={leafYellow} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l6">
      <img src={leafCyan} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l7">
      <img src={dotsGroupOrange} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l8">
      <img src={leafPinkRound} alt="bg-shape" />
    </div>
    <div className="Leafs__layer" id="l9">
      <img src={leafOrange} alt="bg-shape" />
    </div>
  </div>
);

export default Leafs;
