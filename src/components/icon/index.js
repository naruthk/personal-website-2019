import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

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

const Icon = ({ name, size, color }) => (
  <FontAwesomeIcon
    icon={['fab', name]}
    color={color ? color : 'white'}
    size={size ? size : {}}
  />
);

export default Icon;
