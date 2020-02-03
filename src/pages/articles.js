import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleList from '../components/ArticleList';
import Track from '../components/Track';
import './index.css';

function Articles(props) {
  const [toggle, setToggle] = useState(true);
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;
  let btnOne = "Header-link condensed";
  let btnTwo = "Header-link condensed";
  let subs = 13;
  let content;

  if (toggle) {
    content = <ArticleList posts={posts} />;
    btnOne = "Header-link-a condensed";
    btnTwo = "Header-link condensed";
  }
  else {
    content = <Track data={data} />;
    btnOne = "Header-link condensed";
    btnTwo = "Header-link-a condensed";
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Articles"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <blockquote>
        “Be curious. Read widely. Try new things. What people call intelligence
        just boils down to curiosity.”<br />-Aaron Swartz
      </blockquote>
      <p className="sans" style={{ margin: "30px auto" }}>
        Every week I explore a curiosity, typically a new programming language
        or paradigm. I've found the more I learn, the less I know. My learning
        track offers a structured view of both. <strong>If we share curiosities,
        join {subs} other developers and
        <a
          href="https://tinyletter.com/curtiscodes"
          target="_blank"
          rel="noopener noreferrer"
          >
          &nbsp;subscribe&nbsp;
        </a>
        to my "curtisy" newsletter!</strong>
      </p>

      <div className="Header-nav">
        <button
          className={btnOne}
          onClick={() => setToggle(!toggle)}
          >
          Articles by Date
        </button>
        <button
          className={btnTwo}
          onClick={() => setToggle(!toggle)}
          >
          Learning Track
        </button>
      </div>

      {content}

    </Layout>
  );
}

export default Articles;

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
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
