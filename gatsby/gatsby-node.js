const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    console.log(value)

    createNodeField({
      name: `slug`,
      node,
      value: `/blog/posts${value}`,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/blog/blog-template.js`),
      context: { id: node.id },
    })
  })
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   // Ensures we are processing only markdown files
//   if (node.internal.type === "Mdx") {
//     // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
//     const relativeFilePath = createFilePath({
//       node,
//       getNode,
//       basePath: "tabs",
//     })

//     // Creates new query'able field with name of 'slug'
//     createNodeField({
//       node,
//       name: "slug",
//       value: `/blog/posts${relativeFilePath}`,
//     })
//   }
// }

// I probably need to put this code back and read about it more here: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
