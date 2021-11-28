import * as React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <Container>
    <SiteTitle>
      <SiteTitleLink
        to="/"
      >
        {siteTitle}
      </SiteTitleLink>
    </SiteTitle>
    <Generations>for the next generation</Generations>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Container = styled.header`
  display: flex;
  align-items: baseline;
  gap: 16px;
  background-color: black;
  padding: 1rem 2rem;
`

const SiteTitle = styled.h1`
  font-size: 20px;
`

const SiteTitleLink = styled(Link)`
  color: white;
  text-decoration: none
`

const Generations = styled.div`
  font-size: 12px;
  color: white;
`

export default Header
