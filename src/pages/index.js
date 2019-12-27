import { graphql } from 'gatsby';
import React from 'react';
import get from 'lodash/get';

import Layout from 'components/layout';
import Meta from 'components/meta';
import Intro from 'components/intro';
import Services from 'components/services';
import Skills from 'components/skills';
import Experience from 'components/experience';
import Projects from 'components/projects';

import { globalInfo } from '../globalInfo';

const {
  introText,
  services,
  skills,
  full_time_experiences: fullTime,
  internship_experiences: internships,
  projects,
} = globalInfo;

const Home = ({ data, location }) => (
  <Layout location={location}>
    <Meta site={get(data, 'site.meta')} />
    <Intro subheading={introText} />
    <Projects projects={projects} />
    <Services services={services} />
    <Skills skills={skills} />
    {/* <Experience fullTime={fullTime} internships={internships} /> */}
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
