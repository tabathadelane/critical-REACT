import { graphql, useStaticQuery } from "gatsby"

export const useRecentPosts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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

  return data
}
