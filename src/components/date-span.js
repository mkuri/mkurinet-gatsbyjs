import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const DateSpan = ({ date }) => (
  <Span>
    <FontAwesomeIcon icon={faClock} width="11" />
    <time>{date.split('T')[0]}</time>
  </Span>
)

DateSpan.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateSpan

const Span = styled.span`
  font-size: 0.7rem;

  time {
    margin-left: 0.1rem;
  }
`
