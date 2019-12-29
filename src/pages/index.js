import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import Layout from 'components/layout';
import Meta from 'components/meta';
import Intro from 'components/intro';
import Services from 'components/services';
import Companies from 'components/companies';
import Projects from 'components/projects';

import { globalInfo } from '../globalInfo';

const {
  global,
  introduction,
  services,
  full_time_experiences: companies,
  internship_experiences: internships,
  projects,
} = globalInfo;

const Home = ({ data }) => (
  <Layout>
    <Meta site={get(data, 'site.meta')} />
    <Intro introduction={{ ...introduction, ...global }} />
    <Projects projects={projects} />
    <Companies companies={companies} internships={internships} />
    <Services services={services} />
  </Layout>
);

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
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
