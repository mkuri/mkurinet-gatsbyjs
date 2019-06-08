import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const TagsSpan = ({ tags }) => (
  <Span>
    <FontAwesomeIcon icon={faTag} width="10" />
    <ul>
    {tags.map(({ name }) => (
      <li><Link to={`/tag/${name}`}>#{name}</Link></li>
    ))}
    </ul>
  </Span>
)

TagsSpan.propTypes = {
  tags: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
}

export default TagsSpan

const Span = styled.span`
  font-size: 0.7rem;
  margin-left: 0.5rem;

  ul {
    display: inline-block;
    padding-inline-start: 0;
    margin-top: 0;
  }

  li {
    display: inline-block;
    margin-top: 0;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
`
