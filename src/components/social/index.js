import React from 'react';
import _ from 'lodash';

import Link from '../links';
import Icon from '../icon';

import './style.scss';

const twitterUrl = 'https://www.twitter.com/naruthkongurai';
const githubUrl = 'https://www.github.com/naruthk';
const linkedinUrl = 'https://www.linkedin.com/in/naruthkongurai';

const Social = () => {
  return (
    <div className="SocialCol">
      <div className="SocialCol__icons">
        <Link className="SocialCol__icon" to={githubUrl} doOpenInNewTab>
          <Icon name="github" size={'2x'} />
        </Link>
        <Link className="SocialCol__icon" to={linkedinUrl} doOpenInNewTab>
          <Icon name="linkedin" size={'2x'} />
        </Link>
        <Link className="SocialCol__icon" to={twitterUrl} doOpenInNewTab>
          <Icon name="twitter" size={'2x'} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
