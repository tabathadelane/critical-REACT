import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SideBar from "../components/side-bar"
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
      <Header />
      <div class="flex-container">
        <SideBar />
        <div class="flex-item">
          <About />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
