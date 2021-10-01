import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
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
    <>
      <h4>Most Recent Posts:</h4>
      <div>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <div class="block  side-bar">
            <Link to={fields.slug}>
              <h3 class="line-thin">{frontmatter.title}</h3>
              <p class="date futura">{frontmatter.date}</p>
              <p class="line">{excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/blog/archive">
        <h4 class="link">See All Posts</h4>
      </Link>
    </>
  )
}

export default SideBar
