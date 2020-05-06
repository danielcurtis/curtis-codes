import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Icons({ active, setActive }) {
  const data = useStaticQuery(graphql`
    query {
      doc: file(relativePath: { eq: "doc.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dir: file(relativePath: { eq: "dir.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pic: file(relativePath: { eq: "pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eml: file(relativePath: { eq: "eml.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lnk: file(relativePath: { eq: "lnk.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const name = ['About Me', 'Articles', 'Projects'];
  const alts = ['Document icon', 'Directory icon', 'Picture icon'];
  const path = ['doc', 'dir', 'pic'];
  const href = [
    'mailto:contactdcurtis@gmail.com',
    'https://github.com/danielcurtis',
    'https://linkedin/in/dancurtis',
    'https://twitter.com/curtiscodes_',
  ];
  const link = ['Email', 'GitHub', 'LinkedIn', 'Twitter'];
  const pth2 = ['eml', 'lnk', 'lnk', 'lnk'];

  return (
    <div style={{ width: '70px' }}>
      {name.map((el, i) => {
        return (
          <div
            onClick={() => setActive(el)}
            style={{
              margin: '10px',
              textAlign: 'center',
              background: 'green',
              cursor: 'pointer',
            }}
          >
            <Img
              style={{ maxWidth: '50px', maxHeight: '50px' }}
              fluid={data[path[i]].childImageSharp.fluid}
              alt={alts[i]}
            />
            <label>{el}</label>
          </div>
        );
      })}

      {href.map((el, i) => {
        return (
          <a href={el}>
            <div
              style={{
                margin: '10px',
                textAlign: 'center',
                background: 'green',
                cursor: 'pointer',
              }}
            >
              <Img
                style={{ maxWidth: '50px', maxHeight: '50px' }}
                fluid={data[pth2[i]].childImageSharp.fluid}
                alt="Link icon"
              />
              <label>{link[i]}</label>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Icons;
