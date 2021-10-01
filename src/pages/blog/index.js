import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/blog/layout"
import SideBar from "../../components/blog/side-bar"
import About from "./about"

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          title
          month
          day
          date(formatString: "dddd MMMM Do, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

const HomePage = () => {
  return (
    <Layout>
      <div class="flex-container">
        <div>
          <SideBar />
        </div>
        <About />
      </div>
    </Layout>
  )
}

export default HomePage
