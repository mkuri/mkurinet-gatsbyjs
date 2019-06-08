import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import DateSpan from "./date-span"
import TagsSpan from "./tags-span"

const PostList = ({ post }) => (
  <List>
    <Link to={`/post/${post.slug}`}>{post.title}</Link>
    <div>
      <DateSpan date={post.dateUpdated} />
      <TagsSpan tags={post.tags} />
    </div>
  </List>
)

PostList.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostList

const List = styled.li`
  margin-top: 0.5rem;
`
