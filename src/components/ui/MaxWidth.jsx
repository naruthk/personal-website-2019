import React from 'react';
import PropTypes from 'prop-types';

import './MaxWidth.scss';

const MaxWidth = props => {
  const { title, className, isTitleCentered } = props;

  return (
    <section className={`MaxWidth ${className}`}>
      {title && (
        <h2
          className={`MaxWidth__page-title col-12 ${
            isTitleCentered ? 'text-center' : ''
          }`}
        >
          {title}
        </h2>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

MaxWidth.propTypes = {
  title: PropTypes.string,
  isTitleCentered: PropTypes.bool,
};

MaxWidth.defaultProps = {
  title: null,
  isTitleCentered: true,
};

export default MaxWidth;
