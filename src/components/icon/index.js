import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAws,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faDocker,
  faWordpress,
  faFigma,
  faInvision,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faAws,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faDocker,
  faWordpress,
  faFigma,
  faInvision
);

const Icon = ({ name, size = '2x', color = '' }) => (
  <FontAwesomeIcon icon={['fab', name]} color={color} size={size} />
);

export default Icon;
