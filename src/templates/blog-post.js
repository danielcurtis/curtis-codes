import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';

function BlogTemplate(props) {
  const { data } = props;
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { prev, next } = props.pageContext;
  return (
    <Layout location={props.location} title={siteTitle}>
      <div style={{ maxWidth: '800px', margin: 'auto', marginBottom: '45px' }}>
        <SEO title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          <em>Last updated {post.frontmatter.date}</em>
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <section>
          <em>
            I enjoy engineering software and writing about it. Follow me on{' '}
            <a href="https://twitter.com/curtiscodes_">Twitter</a> for updates!
          </em>
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
                <Link to={`/articles/${prev.fields.slug}`} rel="prev">
                  ← {prev.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/articles/${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </section>
      </div>
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
      }
    }
  }
`;
