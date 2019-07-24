import React from 'react';

import './style.scss';

const displaySpecificExperience = experience => (
  <div
    className="col-lg-3 col-md-4 text-center"
    key={experience.cloudinaryImageUrl}
  >
    <img
      className="max-width-parent mb-10"
      src={`https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${experience.cloudinaryImageUrl}.png`}
      alt="icon"
    />
    <p className="mb-0">{experience.duration}</p>
    <h4>{experience.position}</h4>
    <h6 className="text-light mb-40 font-tertiary">{experience.companyName}</h6>
  </div>
);

const Experience = props => (
  <section className="section experience">
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-lg-12 text-center">
          <h2 className="section-title">Experience</h2>
        </div>
        {props.fullTime.map(displaySpecificExperience)}
        {props.internships.map(displaySpecificExperience)}
      </div>
    </div>
  </section>
);

export default Experience;
