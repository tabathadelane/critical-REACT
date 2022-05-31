/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

export default {
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog/posts`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wquwjb1d",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
