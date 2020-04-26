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
      <SEO
        title="About Me"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h2>About Me</h2>
      <p>
        I wake up excited to learn through building software projects and
        encourage others with similar ambitions. Currently, I'm focusing on Deep
        Learning in Python while continually evolving my skillset in C, Node.js,
        and React. I'll be searching for new professional opportunities in
        August 2020.
      </p>
      <p>
        I'm also a believer that every paragraph over three sentences should be
        bullet points:
      </p>
      <ul>
        <li>
          <strong>Languages:</strong> C, C++, Python, NodeJS, React, JavaScript,
          HTML/CSS
        </li>
        <li>
          <strong>Tools:</strong> Docker, Git
        </li>
        <li>
          <strong>Education:</strong> B.S. Computer Science & Cybersecurity
        </li>
        <li>
          <strong>Experience:</strong> Frontend (1yr), Backend (1y)
        </li>
        <li>
          <strong>Dream Job:</strong> Building a better tomorrow with Machine
          Learning, C, & React
        </li>
        <li>
          <strong>Contact:</strong>{' '}
          <a href="mailto:contactdcurtis@gmail.com">Email</a>,{' '}
          <a href="https://github.com/danielcurtis">GitHub</a>, &{' '}
          <a href="https://twitter.com/curtiscodes_">Twitter</a>
        </li>
      </ul>

      <p>
        Below are a few <Link to="/about#references">references</Link> and more
        details on <Link to="/about#background">my background</Link>.
      </p>

      <h2 id="references" className="h2-margin">
        References
      </h2>
      <blockquote>
        “I highly recommend Daniel. He has helped me with my growing business in
        several ways to become a local industry leader. He developed my website
        and built customized payment software. He studied my competitors and
        gave me suggestions for marketing strategies, SEO ranking, and much
        more.”
        <br />
        <em>-Austin Montgomery</em>
      </blockquote>

      <h2 id="background" className="h2-margin">
        Professional Background
      </h2>
      <ol className="special-ol">
        <li>
          <strong>Software Engineer Intern @ O.U. Office of Technology</strong>
          <br />
          Placed with the Software Engineering team to update and fix bugs in
          software written in Angular and Node.js in 2020.
        </li>
        <li>
          <strong>Frontend Developer Intern @ O.U. Office of Technology</strong>
          <br />
          Placed with the Web Solutions team to build new university websites
          using Python, JavaScript, and PHP in 2019.
        </li>
        <li>
          <strong>Software Engineer Intern @ CBS Interactive</strong>
          <br />
          Placed with the advanced research and development team to review
          software written in C, C++, and Node.js for bugs and readability in
          2016.
        </li>
      </ol>
      <ol className="special-ol">
        <li>
          <strong>B.S. Computer Science & Cybersecurity</strong>
          <br />
          Earning my undergraduate in Computer Science as well as Cybersecurity.
          On pace to graduate in August 2020. 3.6 GPA.
        </li>
        <li>
          <strong>Full-stack Certification</strong>
          <br />
          Completing FreeCodeCamp's 1800 hour curriculum. On pace to earn the
          certification by May 2020.
        </li>
      </ol>
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
