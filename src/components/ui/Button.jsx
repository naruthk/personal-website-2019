import React from 'react';

import Link from '../links';

import './Button.scss';

const Button = props => {
  const { className, link, message } = props;

  if (link)
    return (
      <Link className={className} to={link}>
        Learn More
      </Link>
    );

  return <button className={className}>{message}</button>;
};

export default Button;
