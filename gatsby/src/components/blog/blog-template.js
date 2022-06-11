import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import Layout from "./layout"
import SideBar from "./side-bar"

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        month
        familiarDate: date(formatString: "dddd MMMM Do, YYYY")
        dayOfWeek: date(formatString: "dddd")
        year: date(formatString: "YYYY")
        day: date(formatString: "Do")
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <div class="flex-container">
        <div>
          <SideBar />
        </div>
        <div>
          <Link to="/blog">
            <h4 class="link home-link">&lt;&lt;&lt; Back Home</h4>
          </Link>
          <h2>{frontmatter.title}</h2>
          <p>
            <button
              aria-label={"convert Faerun date to" + frontmatter.familiarDate}
              class="pre"
              title={frontmatter.familiarDate}
            >
              Date: {frontmatter.month} {frontmatter.day}
            </button>
          </p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
