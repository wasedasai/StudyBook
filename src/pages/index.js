import React from "react"
import Layout from "../components/layouts/layout"
import { graphql, Link } from "gatsby"
import styled, { keyframes } from "styled-components"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <HeroMessageBox>
          <div>
            <SiteName>Study Book</SiteName>
            <SiteScript>Webチームで学ぶことをまごころをこめて書いたサイト</SiteScript>
            <LinkToLessons to="#lessons">講義一覧</LinkToLessons>
          </div>
        </HeroMessageBox>
        <Lessons id="#lessons">
          {data.allMarkdownRemark.nodes.map(node => (
            <div key={node.frontmatter.id}>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </div>
          ))}
        </Lessons>
      </Layout>
    </div>
  )
}

const HeroMessageBox = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const rainbow_animation = keyframes`
  0%, 100% {
      background-position: 0 0;
      }
  50% {
      background-position: 100% 0;
      }
  }
`

const SiteName = styled.h1`
  font-size: 60px;
  text-align: center;
  background: linear-gradient(to right,#66f,#09f,#0f0,#f39,#66f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${rainbow_animation} 16s ease-in-out infinite;
  background-size: 400% 100%;
`

const SiteScript = styled.div`
  font-weight: bold;
  text-align: center;
  color: white;
`

const LinkToLessons = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px;
  border: 2px solid #07e648;
  display: block;
  width: 140px;
  margin: 1rem auto;
  text-align: center;
`

const Lessons = styled.div`
  padding: 2rem 1.5rem;
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
