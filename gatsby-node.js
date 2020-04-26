const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blgTemplate = path.resolve('src/templates/blog-post.js')
  const tagTemplate = path.resolve('src/templates/tags.js')
  const result = await graphql(
    `
      {
        postsRemark: allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
              body
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  // GraphQL error checking
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges
  const tags = result.data.tagsGroup.group

  posts.forEach((post, i) => {
    const prev = i === posts.length - 1 ? null : posts[i + 1].node
    const next = i === 0 ? null : posts[i - 1].node

    createPage({
      path: `/articles${post.node.fields.slug}`,
      component: blgTemplate,
      context: {
        slug: post.node.fields.slug,
        prev,
        next,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/articles/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
