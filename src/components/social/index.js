import React from 'react';

import './style.scss';

import Icon from '../icon';

const SocialIconWithLink = item => (
  <a href={item.url} target="_blank" title={item.name}>
    <Icon name={item.name} size="2x" />
  </a>
);

const Social = props => {
  const twitterUrl = 'https://www.twitter.com/naruthkongurai';
  const githubUrl = 'https://www.github.com/naruthk';
  const linkedinUrl = 'https://www.linkedin.com/in/naruthkongurai';

  return props.isFooter ? (
    <div>
      <ul className="list-inline m-30">
        <li className="list-inline-item">
          {SocialIconWithLink({ name: 'twitter', url: twitterUrl })}
        </li>
        <li className="list-inline-item">
          {SocialIconWithLink({ name: 'linkedin', url: linkedinUrl })}
        </li>
        <li className="list-inline-item">
          {SocialIconWithLink({ name: 'github', url: githubUrl })}
        </li>
      </ul>
    </div>
  ) : (
    <ul className="social-list list-unstyled position-relative ml-5 mt-3 zindex-1">
      <li className="mb-3">
        {SocialIconWithLink({ name: 'twitter', url: twitterUrl })}
      </li>
      <li className="mb-3">
        {SocialIconWithLink({ name: 'linkedin', url: linkedinUrl })}
      </li>
      <li className="mb-3">
        {SocialIconWithLink({ name: 'github', url: { githubUrl } })}
      </li>
    </ul>
  );
};

export default Social;
