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
        I was introduced to development when I was 14. My local city
        commissioned me and two others to build their website in PHP and
        JavaScript. Four years later, I enrolled in college for Computer Science
        and Cybersecurity. I'm on pace to complete my undergraduate in August
        2020. I worked at CBS Interactive as a Software Engineer Intern using C,
        C++, and Node.js. I currently work at Ohio University's Office of
        Technology as a Software Engineer Intern using Angular, Node.js, Java,
        and Docker.
      </p>
      <p>
        Below are <Link to="/about#references">my references</Link>, an outline
        of <Link to="/about#background">my background</Link>, and a categorical
        listing of <Link to="/about#articles">my articles</Link>.
      </p>
      <p>
        Feel free to <a href="mailto:contactdcurtis@gmail.com">email me</a> or
        connect on <a href="https://github.com/danielcurtis">GitHub</a> or{' '}
        <a href="https://twitter.com/curtiscodes_">Twitter</a>.
      </p>

      <h2 id="references">References</h2>
      <blockquote>
        “I highly recommend Daniel. He has helped me with my growing business in
        several ways to become a local industry leader. He developed my website
        and built customized payment software. He studied my competitors and
        gave me suggestions for marketing strategies, SEO ranking, and much
        more.”
        <br />
        <em>-Austin Montgomery</em>
      </blockquote>

      <h2 id="background">Professional Background</h2>
      <ol>
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
        <li>
          <strong>B.S. Computer Science & Cybersecurity</strong>
          <br />
          Earning my undergraduate in Computer Science as well as Cybersecurity.
          On pace to graduate in August 2020. 3.6 GPA.
        </li>
        <li>
          <strong>Deep Learning Specialization</strong>
          <br />
          Working through Andrew Ng's Deep Learning and A.I. specialization
          consisting of five courses taught by Stanford professors & industry
          experts. On pace to complete the specialization in May 2020.
        </li>
        <li>
          <strong>Full-stack Certification</strong>
          <br />
          Completing FreeCodeCamp's 1800 hour curriculum. On pace to earn the
          certification by May 2020.
        </li>
      </ol>

      <h2 id="articles">Article Categories</h2>
      <h3>Frontend Languages</h3>
      <ul>
        <li>
          <Link to="/tags/javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="/tags/react">React</Link>
        </li>
      </ul>

      <h3>Backend Languages</h3>
      <ul>
        <li>
          <Link to="/tags/c">C</Link>
        </li>
      </ul>

      <h3>Computer Science & Engineering</h3>
      <ul>
        <li>
          <Link to="/tags/cybersecurity">Cybersecurity</Link>
        </li>
      </ul>
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
