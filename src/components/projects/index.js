import React from 'react';

import MaxWidth from '../ui/MaxWidth';
import Link from '../links';

import './style.scss';

const Projects = props => {
  const { projects } = props;
  return (
    <MaxWidth className="Projects__container">
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

  const optimzedImageUrl = `https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${cloudinaryImageUrl}.png`;

  return (
    <div
      className="Projects__container Projects__container--box-shadow"
      key={cloudinaryImageUrl}
    >
      <Link to={link} doOpenInNewTab>
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
              <h3 className="text-lighter">{description}</h3>

              <div className="Projects__container__labels">
                <p className="Projects__container__label Projects__container__label--bold">
                  Tools
                </p>
                <p className="Projects__container__label">
                  {technologies.map(technology => (
                    <span
                      key={technology}
                      className="Projects__container__label--split"
                    >
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
              no-padding"
              style={{
                background: `
                  url(${optimzedImageUrl}) left / cover no-repeat`,
              }}
            >
              <img
                src={optimzedImageUrl}
                className="img-fluid"
                alt="portfolio-image"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
