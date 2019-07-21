import React from 'react'

import planPhoto from '../../assets/images/plan.png'

import './style.scss'

const displaySpecificService = process => (
  <div className="col-md-4 mb-4" key={process.title}>
    <div
      className={`card hover-shadow shadow ${process.isFeatured &&
        `active-bg-primary`}`}
    >
      <div className="card-body text-center px-4 py-5">
        <img src={planPhoto} alt="icon" className="mb-5 d-inline-block" />
        {/* <i className="fa-facebook mb-5 d-inline-block"></i> */}
        <h4 className="mb-4">{process.title}</h4>
        <p>{process.content}</p>
      </div>
    </div>
  </div>
)

const Services = props => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="section-title">Services</h2>
        </div>
        {props.services.map(displaySpecificService)}
      </div>
    </div>
  </section>
)

export default Services
