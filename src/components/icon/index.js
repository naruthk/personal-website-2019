import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faLinkedin,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs
)

const Icon = ({ name, size, color }) => (
  <FontAwesomeIcon
    icon={['fab', name]}
    color={color ? color : 'white'}
    size={size ? size : {}}
  />
)

export default Icon
