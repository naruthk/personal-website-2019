import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Layout from 'components/layout'
import Meta from 'components/meta'
import Hero from 'components/hero'
import Intro from 'components/intro'
import Services from 'components/services'
import Skills from 'components/skills'
import Experience from 'components/experience'
import Projects from 'components/projects'

import { globalInfo } from '../globalInfo'

const {
  heroTitle,
  introText,
  services,
  skills,
  social,
  full_time_experiences: fullTime,
  internship_experiences: internships,
  projects,
} = globalInfo

const Home = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Hero title={heroTitle} social={social} />
      <Intro content={introText} />
      <Services services={services} />
      <Skills skills={skills} />
      <Experience fullTime={fullTime} internships={internships} />
      <Projects projects={projects} />
      {/* {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
    </Layout>
  )
}

export default Home

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
`
