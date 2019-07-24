import React from 'react';

import './style.scss';

import avatar from '../../assets/images/me.png';

const Intro = props => (
  <section className="section pt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          <p className="lead text-dark">{props.content}</p>
        </div>
        <div className="col-md-4 text-center drag-lg-top">
          <div className="shadow-down mb-4">
            <img
              src={avatar}
              alt="author"
              className="profile-photo img-fluid w-100 rounded-lg border-thick border-white"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
