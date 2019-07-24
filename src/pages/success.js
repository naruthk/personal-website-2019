import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import Layout from 'components/layout';
import Meta from 'components/meta';
import Hero from 'components/hero';

import { globalInfo } from '../globalInfo';

const { heroTitle, social } = globalInfo;

const ContactFormSuccess = ({ data, location }) => {
  return (
    <Layout location={location} hideContactFormSection>
      <Meta site={get(data, 'site.meta')} />
      <Hero title={heroTitle} social={social} />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Form Submitted</h2>
              <p>
                Thank you so much! I'll make sure to get back to you as soon as
                possible!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactFormSuccess;

export const pageQuery = graphql`
  query ContactFormSuccessPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
