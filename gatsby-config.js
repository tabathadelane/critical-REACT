/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Critical Reactions`,
    description: `Providing Minor Solutions to Major Problems!`,
    blogTitle: `Althea's Journal of Sending`,
    blogDescription: `A collection of far away adventures that keep me close to home.`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    // {
    // resolve: `gatsby-source-filesystem`,
    // options: {
    //   name: `tabs`,
    //   path: `${__dirname}/src/tabs`,
    // },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog/posts`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
