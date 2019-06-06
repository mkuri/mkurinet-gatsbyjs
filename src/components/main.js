import PropTypes from "prop-types"
import React from "react"

const Main = ({ children }) => (
  <main>
    <div className="container">
      {children}
    </div>
  </main>
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
