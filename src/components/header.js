import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./container"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Logo><Link to="/">{siteTitle}</Link></Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Nav>
      <Hr />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Logo = styled.h1`
  padding-top: 2rem;
  padding-bottom: 1rem;

  a {
    color: #0f0f0f;
    font-family: 'Libre Barcode 128 Text';
    font-weight: normal;
    font-size: 2.6rem;
  }

  a:hover {
    text-decoration: none;
  }
`

const Nav = styled.nav`
  li {
    display: inline-block;

    a {
      color: #0f0f0f;
      font-weight: bold;
      font-size: 0.9rem;
      padding-right: 0.6rem;
    }
  }
`

const Hr = styled.hr`
  border-style: none;
  border-top: 3px solid #0f0f0f;
  margin: 0 auto;
`
