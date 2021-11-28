import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const node = data.allMarkdownRemark.edges[0].node;

  return (
    <div>
      <h1>{node.frontmatter.title}</h1>
      <h2>{node.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
        }
      }
    }
  }
`
