import React from 'react';
import { Link, graphql } from 'gatsby';
import { FaGithub, FaRegEnvelope, FaTwitter, FaRegNewspaper } from 'react-icons/fa';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Stack from '../components/Stack';
import './index.css';

function Index(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const stackData = [
    {
      name: "Groopy",
      link: "https://groopy.io",
      desc: "Groopy (iOS, Android) allows friends to compete and grow with each other through private, structured social networks.",
      feat: "React Native"
    },
    {
      name: "Blocking Time",
      link: "https://blokcingtime.com",
      desc: "Blocking Time is a \"personal Jira\" progressive web application I built to track and understand my time, enabling me to balance work, life, and learning.",
      feat: "Serverless"
    },
    {
      name: "Full-stack Certification",
      link: "https://github.com/danielcurtis/freecodecamp",
      desc: "FreeCodeCamp introduced me to Full-stack development roughly two years ago, and I've been working on their project-based, 1800-hour certification ever since.",
      feat: "Certification"
    },
    {
      name: "AC Library",
      link: "https://anotherclibrary.com",
      desc: "Co-creator of AC Library, which is a C library that recreates the wheel and offers massive time-improvements on some of the most frequently used Computer Science algorithms, including Quicksort and JSON parsing.",
      feat: "C"
    },
    {
      name: "B.S. Computer Science & Cybersecurity",
      link: "https://github.com/danielcurtis/cs-degree",
      desc: "Slated to complete my undergraduate degree in both Computer Science and Cybersecurity by August 2020.",
      feat: "Degree"
    },
    {
      name: "Deep Learning AI Specialization",
      link: "https://github.com/danielcurtis/deep-learning",
      desc: "Currently enrolled courses created and taught by Stanford's top-professors to _deepen_ understanding on deep learning through projects and coursework.",
      feat: "Specialization"
    },
  ];

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Software Engineering Projects & Articles"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h2 className="big">
        Hello World, I'm Daniel Curtis
        <span role="img" aria-label="wave"> 👋</span>
      </h2>
      <p className="sans">
        I'm a software engineer passionate about developing ideas into 1s and
        0s. I continually evolve my skill set through project-based learning
        while sharing my process here.
      </p>

      <h2>Full-stack Development</h2>
      <Stack data={stackData[0]} />
      <Stack data={stackData[1]} />
      <Stack data={stackData[2]} />

      <h2>Computer Science & Engineering</h2>
      <Stack data={stackData[3]} />
      <Stack data={stackData[4]} />

      <h2>Machine Learning</h2>
      <Stack data={stackData[5]} />

      <h2>About Me & Quicklinks</h2>
      <p className="sans">
        I grew up around computers and built my cities website when I was 14.
        Since then, I've worked in construction, went back to school for CS, and
        interned at Last.fm and OU's Office of Technology.
      </p>
      <p className="sans">
        Over the last year, I started pushing myself out of my coding comfort
        zone. Every week I apply a new technology to a project and document
        what I learn. My goal with this site is to leave a ladder behind for
        others who share a similar passion for project-based learning.
      </p>
      {/*<blockquote>
        I highly recommend Daniel. He has helped me with my growing to become a
        local industry leader. He developed my website and built customized
        payment software. He studied my competitors and gave me suggestions for
        marketing strategies, SEO ranking, and much more.<br />
        -Austin Montgomery
      </blockquote>*/}
      <p className="sans">
        Feel free to reach out on any of the listed platforms. I'll be open to
        new professional opportunities in August 2020.
      </p>
      <a
        href="https://github.com/danielcurtis"
        target="_blank"
        rel="noopener noreferrer"
        className="sans"
        >
        <FaGithub style={{ height: "16px" }} /> GitHub
      </a><br />
      <a
        href="mailto:contactdcurtis@gmail.com"
        className="sans"
        >
        <FaRegEnvelope style={{ height: "16px" }} /> Email
      </a><br />
      <a
        href="https://twitter.com/curtiscodes"
        target="_blank"
        rel="noopener noreferrer"
        className="sans"
        >
        <FaTwitter style={{ height: "16px" }} /> Twitter
        </a><br />
      <a
        href="https://tinyletter.com/curtiscodes"
        target="_blank"
        rel="noopener noreferrer"
        className="sans"
        >
        <FaRegNewspaper style={{ height: "16px" }} /> Curtisy Newsletter
      </a><br />

    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
