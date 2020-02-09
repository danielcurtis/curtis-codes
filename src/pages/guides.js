import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import ArticleList from '../components/ArticleList';
import Track from '../components/Track';
import './index.css';

function Guides(props) {
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
    btnOne = "Articles-btn-active condensed";
    btnTwo = "Articles-btn condensed";
  }
  else {
    content = <Track data={data} />;
    btnOne = "Articles-btn condensed";
    btnTwo = "Articles-btn-active condensed";
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Guides"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <blockquote>
        “Be curious. Read widely. Try new things. What people call intelligence
        just boils down to curiosity.”<br />-Aaron Swartz
      </blockquote>
      <p>
        Every week I explore a curiosity, typically a new programming language
        or paradigm. I've found the more I learn, the less I know. My learning
        track offers a structured view of both.
      </p>
      <p>
        Computer Science is overcomplicated. I create <del>brief but
        comprehensive</del> <strong>concise</strong> guides. None of my guides
        take longer than 10 minutes to read or watch.
      </p>
      <p>
        If we share curiosities, join {subs} other developers and
        <a
          href="https://tinyletter.com/curtiscodes"
          target="_blank"
          rel="noopener noreferrer"
          >
          &nbsp;subscribe to my "curtisy" newsletter
        </a>!
      </p>


      <div className="Header-nav">
        <button
          className={btnOne}
          onClick={() => setToggle(!toggle)}
          >
          Guides by Date
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

export default Guides;

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
