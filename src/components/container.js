import React from "react"
import styled from "styled-components"

const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
)

export default Container

const ContainerStyled = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
`
