/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Critical Reactions`,
    description: `Providing Minor Solutions to Major Problems!`,
    blogTitle: `Althea's Cronicle of Sending`,
    blogDescription: `This is where I share my adventures with the world while learning Gatsby.js!`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
