import PropTypes from "prop-types"
import React from "react"

import Container from "./container"

const Main = ({ children }) => (
  <main>
    <Container>
      {children}
    </Container>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
