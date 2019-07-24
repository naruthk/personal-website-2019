import React from 'react';

import './style.scss';

import backgroundDot from '../../assets/images/bg-dots.png';

const Contact = () => (
  <section
    className="section section-on-footer bg-dot"
    data-background={backgroundDot}
  >
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="col-lg-8 mx-auto">
          <div className="bg-white rounded text-center p-5 shadow-down">
            <h4 className="mb-80 font-tertiary">Let's work together!</h4>
            <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify
              className="row"
            >
              <div className="col-md-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  className="form-control px-0 mb-4"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  className="form-control px-0 mb-4"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  className="form-control px-0 mb-4"
                  placeholder="Your inquiry message goes here"
                ></textarea>
              </div>
              <div className="col-lg-12 col-12 mx-auto">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <div className="col-lg-6 col-10 mx-auto">
                <button className="btn btn-primary w-100 font-tertiary">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
