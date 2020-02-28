import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleList from '../components/ArticleList';
import Track from '../components/Track';
import './index.css';

function About(props) {
  const [toggle, setToggle] = useState(true);
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="About"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <h2>About me</h2>
      <p>
        I'm Daniel Curtis, a one-time iron worker turned software engineer. I
        grew up around computers and enjoy solving tough problems with software,
        especially in C, C++, Node.js, and React. I'm passionate about learning
        through projects and sharing my process, so others can too. I'll be
        looking for new opportunities in the Fall of 2020.
      </p>
      <div className="Index-social">
        <Link to="/about#pov">Other POVs</Link><br />
        <Link to="/about#edu">Educational background</Link><br />
        <Link to="/about#year">Past few years</Link><br />
        <Link to="/about#links">Find me online</Link><br />
        <Link to="/about#learn">Learning in public</Link>
      </div>

      <h2 id="pov">Other point of views</h2>
      <blockquote>
        “I highly recommend Daniel. He has helped me with my growing business
        in several ways to become a local industry leader. He developed my website
        and built customized payment software. He studied my competitors and gave
        me suggestions for marketing strategies, SEO ranking, and much more.”
        <br /><em>-Austin Montgomery</em>
      </blockquote>

      <h2 id="edu">Educational background</h2>
      <ol>
        <li><strong>B.S. Computer Science & Cybersecurity</strong><br />
          Earning my undergraduate in Computer Science as well as Cybersecurity.
          On pace to graduate in August 2020. 3.5 GPA.
        </li>
        <li><strong>Deep Learning Specialization</strong><br />
          Working through Andrew Ng's Deep Learning and A.I. specialization
          consisting of five courses taught by Stanford professors & industry
          experts. On pace to complete the specialization in May 2020.
        </li>
        <li><strong>Full-stack Certification</strong><br />
          Completing FreeCodeCamp's 1800 hour curriculum. On pace to earn the
          certification by May 2020.
        </li>
      </ol>

      <h2 id="year">Past few years</h2>
      <ol>
        <li><strong>Pre-2016</strong><br />
          Played with mobile and web development. Highlighted projects include
          building a Buddy the Elf soundboard app and my cities website in PHP
          and JavaScript when I was 14.
        </li>
        <li><strong>2016</strong><br />
          Interned at CBS as a software engineer. Worked with an advanced
          research and development team on Last.fm. Learned C/C++ while
          maintaining the codebase.
        </li>
        <li><strong>2018</strong><br />
          Enrolled in college for Computer Science & Cybersecurity.<br />
          Freelance web and software development.
        </li>
        <li><strong>2019</strong><br />
          Interned at OU's Office of Technology as a frontend developer. Worked
          with a frontend team to rebuild the university website. Designed and
          developed websites and scripts in JavaScript and Python.<br />
          Co-created Another C Library.
        </li>
      </ol>

      <h2 id="links">Find me online</h2>
      <p>
        I keep most of my projects on GitHub and random ideas on CodePen. If you
        are interested in connecting, follow me on Twitter or email me!
      </p>

      <div className="Index-social">
        <a
          href="https://github.com/danielcurtis"
          target="_blank"
          rel="noopener noreferrer"
          >
          GitHub
        </a><br />
        <a
          href="https://codepen.io/danielcurtis"
          target="_blank"
          rel="noopener noreferrer"
          >
          CodePen
        </a><br />
        <a href="mailto:contactdcurtis@gmail.com">
          Email
        </a><br />
        <a
          href="https://twitter.com/curtiscodes_"
          target="_blank"
          rel="noopener noreferrer"
          >
          Twitter
        </a>
      </div>

      <h2 id="learn">Learning in public</h2>
      <Track data={data} />

    </Layout>
  );
}

export default About;

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
