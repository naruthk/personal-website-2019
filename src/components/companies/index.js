import React from 'react';

import MaxWidth from '../ui/MaxWidth';

import './style.scss';

const displayCompanies = company => {
  const { companyName, position, duration, cloudinaryImageUrl } = company;
  return (
    <div className="col-sm-6 col-md-6 col-lg-3 text-center" key={companyName}>
      <div
        className="Companies__company-thumbnail"
        style={{
          background: `
            url(https://res.cloudinary.com/naruthk/image/upload/q_80,c_scale,dpr_auto/naruthk.com/${cloudinaryImageUrl}.png) center / contain no-repeat`,
        }}
      />
      <div className="Companies__description">
        <p className="Companies__description--subheading">
          {position}
          <br />
          <span className="Companies__description--footnote">({duration})</span>
        </p>
      </div>
    </div>
  );
};

const Companies = props => {
  const { companies, internships } = props;
  return (
    <MaxWidth className="Companies">
      <div className="container">
        <div className="row">
          {companies.map(displayCompanies)}
          {internships.map(displayCompanies)}
        </div>
      </div>
    </MaxWidth>
  );
};

export default Companies;
