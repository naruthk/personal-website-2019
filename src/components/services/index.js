import React from 'react';

import Icon from '../icon';

import './style.scss';

const displaySpecificService = process => (
  <div className="col-md-4 mb-4" key={process.title}>
    <div className={`card shadow ${process.isFeatured && `active-bg-primary`}`}>
      <div className="card-body text-center px-4 py-5">
        <div className="mb-5 d-inline-block">
          {process.icons.map(item => {
            return (
              <span className="px-2 py-5 mb-5">
                <Icon
                  name={item}
                  size="2x"
                  color={process.isFeatured ? 'black' : {}}
                />
              </span>
            );
          })}
        </div>
        <h4 className="mb-4">{process.title}</h4>
        <p>{process.content}</p>
      </div>
    </div>
  </div>
);

const Services = props => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Services</h2>
        </div>
        {props.services.map(displaySpecificService)}
      </div>
    </div>
  </section>
);

export default Services;
