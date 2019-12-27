import React from 'react';

import MaxWidth from '../ui/MaxWidth';

import './style.scss';

const displaySpecificSkill = skill => {
  const { title, percentage, backgroundColor } = skill;
  return (
    <div className="col-lg-3 col-sm-6 mb-4" key={title}>
      <div className="card shadow text-center">
        <div
          className="position-relative rounded-top progress-wrapper"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="wave" style={{ bottom: Number(percentage) }}></div>
        </div>
        <div className="card-footer bg-white">
          <h4 className="card-title">{`${title} (${percentage}%)`}</h4>
        </div>
      </div>
    </div>
  );
};

const Skills = props => (
  <MaxWidth>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Skills</h2>
        </div>
        {props.skills.map(displaySpecificSkill)}
      </div>
    </div>
  </MaxWidth>
);

export default Skills;
