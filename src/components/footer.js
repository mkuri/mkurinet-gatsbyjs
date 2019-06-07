import React from "react"
import styled from "styled-components"

import Container from "./container"

const Footer = () => (
  <FooterStyled>
    <Container>
      <p>© 2018 Makoto Kurihara</p>
    </Container>
  </FooterStyled>
)

export default Footer

const FooterStyled = styled.footer`
  margin-top: auto;
  padding: 0.5rem 0; 
  color: #ccc;
  background-color: #0f0f0f;

  p {
    font-size: 0.7rem;
    margin: 0;
  }
`
