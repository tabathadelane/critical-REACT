import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "../components/layout"
import Header from "./header"
import SideBar from "./side-bar"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <Header />
      <div class="flex-container">
        <SideBar />
        <div class="flex-item">
          <Link to="/">
            <h4 class="link home-link">&lt;&lt;&lt; Back Home</h4>
          </Link>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
