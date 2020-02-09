import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from "gatsby-image";

import Layout from '../components/Layout';
import SEO from '../components/seo';

function BlogTemplate(props) {
  const { data } = props;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { prev, next } = props.pageContext;
  const subs = 13;
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <Img fluid={featuredImgFluid} />
      <h1 className="big" style={{ marginTop: "20px" }}>
        {post.frontmatter.title}
      </h1>
      <p style={{ display: `block` }} className="sans">
        <strong>Daniel Curtis | {post.frontmatter.date}</strong>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr />
      <p className="sans"><strong>
        I enjoy building projects with code and writing about it. Join {subs} other
        developers and
        <a
          href="https://tinyletter.com/curtiscodes"
          target="_blank"
          rel="noopener noreferrer"
          >
          {` subscribe to my newsletter `}
        </a>
        if you do too!
      </strong></p>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {prev && (
            <Link to={`/guides${prev.fields.slug}`} rel="prev">
              ← {prev.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/guides${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
}

export default BlogTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
