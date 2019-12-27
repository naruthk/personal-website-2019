import React from 'react';

import MaxWidth from '../ui/MaxWidth';
import Button from '../ui/Button';

import './style.scss';

const Projects = props => {
  const { projects } = props;
  return (
    <MaxWidth className="Projects__container">
      <h2 className="Projects__container__title">Projects</h2>
      <div className="Projects__container__content">
        {projects.map(displaySpecificProject)}
      </div>
    </MaxWidth>
  );
};

const displaySpecificProject = project => {
  const {
    cloudinaryImageUrl,
    projectName,
    description,
    technologies,
    link,
  } = project;
  return (
    <div
      className="Projects__container Projects__container--box-shadow"
      key={cloudinaryImageUrl}
    >
      <div className="container">
        <div className="row">
          <div
            className="
              Projects__container__content__item__overview
              col-xs-12
              col-sm-12
              col-lg-6"
          >
            <h2>{projectName}</h2>
            <h3>{description}</h3>

            <Button
              className="Button Button--size-normal Button--shape-rounded"
              link={link}
              message={'Demo'}
            />

            <div className="Projects__container__labels">
              <p className="Projects__container__label Projects__container__label--bold">
                Tools
              </p>
              <p className="Projects__container__label">
                {technologies.map(technology => (
                  <span className="Projects__container__label--split">
                    {technology}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div
            className="
            Projects__container__content__item__thumbnail
            col-xs-12
            col-sm-12
            col-lg-6
            overflow-hidden
            no-padding"
          >
            <img
              src={`https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${project.cloudinaryImageUrl}.png`}
              alt="portfolio-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
