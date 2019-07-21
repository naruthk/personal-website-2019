import React from 'react'

import Icon from '../icon'

import './style.scss'

const Footer = () => (
  <footer className="bg-dark footer-section">
    <div className="text-center py-5">
      {/* <a href="#" title="twitter" target="_blank"> */}
      <Icon name="twitter" size="2x" />
      {/* </a> */}
    </div>
    <div className="text-center py-5">
      <p className="mb-0 text-light">
        &copy; 2019 | Naruth Kongurai
        <br />
        Built using Gatsby.js & React. Original design by{' '}
        <a
          href="https://themefisher.com/best-hugo-themes"
          target="_blank"
          title="Themefisher"
        >
          Themefisher
        </a>
      </p>
    </div>
  </footer>
)

export default Footer
