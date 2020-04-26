import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'

function BlogTemplate(props) {
  const { data } = props
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { prev, next } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={post.frontmatter.title} />
      <h1 style={{ marginTop: '20px' }}>{post.frontmatter.title}</h1>
      <p style={{ display: `block` }}>
        <em>Last updated {post.frontmatter.date}</em>
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <section
        style={{
          textAlign: `center`,
          marginTop: `50px`,
          background: `blue`,
          padding: `20px 20px 10px 20px`,
          color: `white`,
        }}
      >
        <em>
          I enjoy engineering software and writing about it. Follow me on{' '}
          <a
            style={{ color: `white`, textDecoration: `underline` }}
            href="https://twitter.com/curtiscodes_"
          >
            Twitter
          </a>{' '}
          for updates!
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
              <Link
                style={{ color: `white`, textDecoration: `underline` }}
                to={`/articles/${prev.fields.slug}`}
                rel="prev"
              >
                ← {prev.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                style={{ color: `white`, textDecoration: `underline` }}
                to={`/articles/${next.fields.slug}`}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default BlogTemplate

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
`
