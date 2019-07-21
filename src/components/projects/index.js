import React from 'react'

const displaySpecificProject = project => (
  <div
    className="col-lg-4 col-6 mb-4 shuffle-item"
    key={project.cloudinaryImageUrl}
  >
    <div className="position-relative rounded hover-wrapper">
      <img
        src={`https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${project.cloudinaryImageUrl}.png`}
        alt="portfolio-image"
        className="img-fluid rounded w-100 d-block"
      />
      <div className="hover-overlay">
        <div className="hover-content">
          <a className="btn btn-light btn-sm font-tertiary" href="#">
            view project
          </a>
        </div>
      </div>
    </div>
  </div>
)

const Projects = props => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Projects</h2>
        </div>
      </div>
      <div className="row shuffle-wrapper">
        {props.projects.map(displaySpecificProject)}
      </div>
    </div>
  </section>
)

export default Projects
