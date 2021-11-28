import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <HeroMessageBox>
          <div>
            <SiteName>Study Book</SiteName>
            <SiteScript>Webチームで学ぶことをまごころをこめて書いたサイト</SiteScript>
          </div>
        </HeroMessageBox>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.frontmatter.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </div>
        ))}
      </Layout>
    </div>
  )
}

const HeroMessageBox = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SiteName = styled.h1`
  font-size: 60px;
  text-align: center;
`

const SiteScript = styled.div`
  font-weight: bold;
  text-align: center;
`

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title,
          id
        }
      }
    }
  }
`
