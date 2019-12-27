import React, { Fragment } from 'react';
import emergence from 'emergence.js';

import Contact from 'components/contact';
import Social from 'components/social';
import Footer from 'components/footer';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'scss/global.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

class Layout extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }

  render() {
    const { children, hideContactFormSection } = this.props;
    const hideContactSection = hideContactFormSection || false;
    return (
      <Fragment>
        {children}
        <Footer />
        <Social />
      </Fragment>
    );
  }
}

export default Layout;
