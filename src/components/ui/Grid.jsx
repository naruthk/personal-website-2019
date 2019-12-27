import React from 'react';

import './Grid.scss';

const Grid = props => {
  const { className, children } = props;
  return (
    <div className={'Grid ' + className}>
      <div className="Grid__container">{children}</div>
    </div>
  );
};

export default Grid;
