import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../../components/blog/layout"

const Archive = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <Layout>
      <div>
        <Link to="/blog">
          <h4 class="link home-link">&lt;&lt;&lt; Back Home</h4>
        </Link>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <div class="block">
            <Link to={fields.slug}>
              <h3 class="line-thin">{frontmatter.title}</h3>
              <p class="date futura">{frontmatter.date}</p>
              <p class="line">{excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Archive
