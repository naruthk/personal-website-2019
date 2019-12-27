import React from 'react';
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
        <Link className="SocialCol__icon" to={githubUrl}>
          <Icon name="github" size={'2x'} />
        </Link>
        <Link className="SocialCol__icon" to={linkedinUrl}>
          <Icon name="linkedin" size={'2x'} />
        </Link>
        <Link className="SocialCol__icon" to={twitterUrl}>
          <Icon name="twitter" size={'2x'} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
