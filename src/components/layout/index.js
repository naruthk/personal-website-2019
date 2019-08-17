import React from 'react';
import emergence from 'emergence.js';

import Header from 'components/header';
import Contact from 'components/contact';
import Footer from 'components/footer';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'scss/global.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

import { globalInfo } from '../../globalInfo';

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
    const { siteName } = globalInfo;
    return (
      <div>
        {/* <Header siteName={siteName} /> */}
        {children}
        {!hideContactSection && <Contact />}
        <Footer />
      </div>
    );
  }
}

export default Layout;
