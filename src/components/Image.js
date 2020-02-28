import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage.png" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [scroll, setScroll] = useState(0);

  const handleScroll = (e) => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Daniel Curtis"
      style={{ 
        borderRadius: "100%", 
        border: "2px solid black",
        transform: `rotate(${scroll*2}deg)`
      }}
      />
    );
}

export default Image;
