import React, { Fragment } from 'react';

import Social from 'components/social';
import Footer from 'components/footer';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';
import 'scss/global.scss';

const Layout = props => {
  const { children, social } = props;

  return (
    <Fragment>
      {children}
      <Footer />
      <Social links={social} />
    </Fragment>
  );
};

export default Layout;
