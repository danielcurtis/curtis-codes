import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import './index.css'

function About(props) {
  const [toggle, setToggle] = useState(true)
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="sans">
        <SEO
          title="About Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2>About Me</h2>
        <p>
          I try to be concise in code and English... this is me in a nutshell:
        </p>
        <dl>
          <dt>
            <strong>Languages:</strong>
          </dt>
          <dd>
            C, Python (TensorFlow & PyNum), JavaScript (React & Node), and
            HTML/CSS
          </dd>
          <dt>
            <strong>Tools:</strong>
          </dt>
          <dd>Docker and Git</dd>
          <dt>
            <strong>Interests:</strong>
          </dt>
          <dd>Full-stack Development and Machine Learning</dd>
          <dt>
            <strong>Experience:</strong>
          </dt>
          <dd>
            Two years working with the above technologies in Agile environments
          </dd>
          <dt>
            <strong>Education:</strong>
          </dt>
          <dd>Bachelors in Computer Science and Cybersecurity</dd>
          <dt>
            <strong>Hobbies:</strong>
          </dt>
          <dd>Biking, kayaking, and #vanlife</dd>
          <dt>
            <strong>Contact:</strong>
          </dt>
          <dd>
            <a href="mailto:contactdcurtis@gmail.com">Email</a>,{' '}
            <a href="https://github.com/danielcurtis">GitHub</a>,{' '}
            <a href="https://www.linkedin.com/in/dancurtis/">LinkedIn</a>, and{' '}
            <a href="https://twitter.com/curtiscodes_">Twitter</a>
          </dd>
        </dl>

        <h2 className="h2-margin">Other People's Opinions:</h2>
        <blockquote>
          “I highly recommend Daniel. He has helped me with my growing business
          in several ways to become a local industry leader. He developed my
          website and built customized payment software. He studied my
          competitors and gave me suggestions for marketing strategies, SEO
          ranking, and much more.”
          <br />
          <em>-Austin M.</em>
        </blockquote>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
