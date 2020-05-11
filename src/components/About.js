import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function About() {
  const img = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fixed(width: 270) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div style={{ paddingBottom: '3vh' }}>
      <h1>Hello World, I'm Daniel Curtis</h1>
      <div className="About">
        <Img
          style={{ borderRadius: '10px', marginRight: '10px' }}
          fixed={img.me.childImageSharp.fixed}
        />
        <div style={{ marginRight: '10px', maxWidth: '700px' }}>
          <p>
            I’m a software engineer passionate about helping others by turning
            hard problems into 1s and 0s. I'm specifically interested in
            Full-stack Development (React, Node, C) and Machine Learning
            (TensorFlow, NumPy). I'll be open to new opportunities in September
            2020.
          </p>
          <button>Email Me</button>
        </div>
      </div>
    </div>
  );
}

export default About;
