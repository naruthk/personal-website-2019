import React from 'react';

import MaxWidth from '../ui/MaxWidth';

import './style.scss';

const displaySpecificExperience = experience => (
  <div
    className="col-lg-3 col-md-4 text-center"
    key={experience.cloudinaryImageUrl}
  >
    <img
      className="max-width-parent"
      src={`https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${experience.cloudinaryImageUrl}.png`}
      alt="icon"
    />
    <p>{experience.duration}</p>
    <h4>{experience.position}</h4>
    <h6>{experience.companyName}</h6>
  </div>
);

const Experience = props => (
  <MaxWidth className="Experience">
    <h2>Work Experience</h2>
    <div className="container">
      <div className="row justify-content-around">
        {props.fullTime.map(displaySpecificExperience)}
        {/* {props.internships.map(displaySpecificExperience)} */}
      </div>
    </div>
  </MaxWidth>
);

export default Experience;
