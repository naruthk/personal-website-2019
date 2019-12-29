import React from 'react';

import MaxWidth from '../ui/MaxWidth';
import Leafs from '../Leafs';
import Icon from '../icon';

import './style.scss';

const displaySpecificService = process => {
  const { isFeatured, icons, content, title } = process;

  return (
    <div className="col-md-4 mb-4" key={title}>
      <div
        className={`Services__card shadow ${isFeatured &&
          `Services__card--active`}`}
      >
        <div className="text-center px-4 py-5">
          <div className="mb-5 d-inline-block">
            {icons.map(item => {
              return (
                <span key={item} className="px-2 py-5 mb-5">
                  <Icon
                    name={item}
                    size="2x"
                    color={isFeatured ? 'black' : {}}
                  />
                </span>
              );
            })}
          </div>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const Services = props => (
  <MaxWidth className="Services" title="Services" isTitleCentered>
    <div className="container">
      <div className="row">{props.services.map(displaySpecificService)}</div>
    </div>
    <Leafs />
  </MaxWidth>
);

export default Services;
