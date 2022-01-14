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
            familiarDate: date(formatString: "dddd MMMM Do, YYYY")
            dayOfWeek: date(formatString: "dddd")
            year: date(formatString: "YYYY")
            day: date(formatString: "Do")
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout class="margin">
      <main>
        <Link to="/blog">
          <h4 class="link home-link">&lt;&lt;&lt; Back to the Blog</h4>
        </Link>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <section class="block">
            <Link to={fields.slug}>
              <h3 class="line-thin">{frontmatter.title}</h3>
              <p class="date futura">
                <a title={frontmatter.familiarDate}>
                  {frontmatter.dayOfWeek} {frontmatter.month} {frontmatter.day},{" "}
                  {frontmatter.year}
                </a>
              </p>
              <p class="line">{excerpt}</p>
            </Link>
          </section>
        ))}
      </main>
    </Layout>
  )
}

export default Archive
