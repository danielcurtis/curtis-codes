import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import {
  FaGithub,
  FaRegEnvelope,
  FaTwitter,
  FaRegNewspaper,
} from 'react-icons/fa'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Stack from '../components/Stack'
import Image from '../components/Image'
import './index.css'
import ArticleList from '../components/ArticleList'

function Index(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const stackData = [
    {
      name: 'GroupedUp - Build lasting habits through structured groups',
      link: 'https://grouped-up.webflow.io',
      feat: 'Swift, Flutter',
    },
    {
      name: 'Blocking Time - A personal Jira for task management',
      link: '',
      feat: 'MERN Stack',
    },
    {
      name: 'Another C Library - Create scalable, complex apps faster with C',
      link: 'https://anotherclibrary.com',
      feat: 'Open Source',
    },
    {
      name: 'Gatsby Tutorial Starter - Interactive tutorials from Markdown',
      link: '',
      feat: 'Open Source',
    },
  ]

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Software Engineer & Writer"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflowX: 'hidden',
        }}
      >
        <div>
          <h2 style={{ marginTop: 0 }}>Hello World, I'm Daniel Curtis</h2>
          <p style={{ maxWidth: '475px', marginLeft: 0 }}>
            I'm a software engineer passionate about turning hard problems into
            1s and 0s, especially in C, Python, Node.js, and React. I document
            what I learn to help others while keeping myself accountable.
          </p>
        </div>
        <Image />
      </div>

      <h2>Projects</h2>
      <Stack data={stackData[2]} />

      <h2>Guides</h2>
      <ArticleList posts={posts} />
    </Layout>
  )
}

export default Index

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
            title
            tags
          }
        }
      }
    }
  }
`
