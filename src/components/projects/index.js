import React from 'react';

import './style.scss';

const displaySpecificProject = project => (
  <div className="col-lg-4 mb-4" key={project.cloudinaryImageUrl}>
    <div className="position-relative rounded hover-wrapper">
      <img
        src={`https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${project.cloudinaryImageUrl}.png`}
        alt="portfolio-image"
        className="img-fluid rounded w-100 d-block"
      />
      <div className="hover-overlay">
        <div className="hover-content">
          <a
            className="btn btn-light btn-sm font-tertiary"
            href={project.link}
            target="_blank"
          >
            <h4 className="mt-3">{project.projectName}</h4>
            <p>{project.technologies}</p>
          </a>
        </div>
      </div>
    </div>
    <p className="py-4">
      <strong>{project.platform}</strong> - {project.description}
    </p>
  </div>
);

const Projects = props => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Projects</h2>
        </div>
      </div>
      <div className="row">{props.projects.map(displaySpecificProject)}</div>
    </div>
  </section>
);

export default Projects;
