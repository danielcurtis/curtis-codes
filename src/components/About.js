import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaRegEnvelope,
} from 'react-icons/fa';

import Background from './Background';

function About() {
  const img = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className="win-space">
      <div className="About-top">
        <Img
          className="About-img"
          fixed={img.me.childImageSharp.fixed}
          alt="Dan Curtis"
        />
        <div className="About-top-txt">
          <h1 className="About-h1">Hi there 👋</h1>
          <p>
            I'm an enthusiastic software engineer with 2+ years of hands-on
            experience with C and JavaScript/Node/React interested in machine
            learning.
          </p>
          <div className="flex">
            <a href="mailto:contactdcurtis@gmail.com" className="no-decor">
              <button>
                <FaRegEnvelope />
              </button>
            </a>
            <a href="https://github.com/danielcurtis" className="no-decor">
              <button>
                <FaGithub />
              </button>
            </a>
            <a href="https://linkedin.com/in/dancurtis" className="no-decor">
              <button>
                <FaLinkedinIn />
              </button>
            </a>
            <a href="https://twitter.com/codescurtis" className="no-decor">
              <button>
                <FaTwitter />
              </button>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <Background />

      <hr className="About-hr" />

      <blockquote className="About-blockquote">
        "I had the pleasure of working with Daniel as a part of our enterprise
        University website migration project for the past year at Ohio
        University. Daniel was one of our top-performing student web developers
        on the team and we could always count on him to go above and beyond for
        any task he was given. Daniel was the lead developer for our Student
        Affairs site migrations and did wonderful interacting with customers and
        explaining technical matters in an easy-to-understand fashion. He was
        kind and patient when training new employees and kept a positive mindset
        with even the most daunting tasks. As the migration came to an end, our
        organization knew that Daniel had much more potential beyond front end
        development and he was moved to the Software Engineering team to build
        upon his already wonderful skillset. During my time working with Daniel,
        I was impressed with his drive, attention to detail, willingness to
        learn and be a team player, and overall technical expertise. It is my
        honor to recommend Daniel for whatever future endeavors he pursues and I
        cannot wait to see him do great things"
        <br />
        <footer>— Breanna, Project Manager</footer>
      </blockquote>
      <blockquote>
        "I highly recommend Daniel. He has helped me with my growing business in
        several ways to become a local industry leader. He developed my website
        and built customized payment software. He studied my competitors and
        gave me suggestions for marketing strategies, SEO ranking, and much
        more."
        <br />
        <footer>— Austin, Freelance Client</footer>
      </blockquote>
    </div>
  );
}

export default About;
