import React from 'react';

import './MaxWidth.scss';

const MaxWidth = props => (
  <section className="max-width">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mx-auto">{props.children}</div>
      </div>
    </div>
  </section>
);

export default MaxWidth;
