import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';

function Index() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      style={{
        width: '100%',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
      }}
      fluid={imageData}
      backgroundColor={'#040e18'}
    >
      <Layout>
        <SEO
          title="About Me"
          keywords={['software', 'engineer', 'portfolio', 'website']}
        />
        <h2>gatsby-background-image</h2>
      </Layout>
    </BackgroundImage>
  );
}

export default Index;
