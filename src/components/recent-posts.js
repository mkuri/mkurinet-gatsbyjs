import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import PostList from "./post-list"

const RecentPosts = ({ recentPosts }) => (
  <Section>
    <Title>Recent Posts</Title>
    <Posts>
      {recentPosts.map(({ node }) => (
        <PostList post={node} />
      ))}
    </Posts>
  </Section>
)
    
RecentPosts.propTypes = {
  recentPosts: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.arrayOf(PropTypes.object)])
}

export default RecentPosts

const Section = styled.section`
  margin-top: 1.6rem;
`

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: bold;
`

const Posts = styled.ul`
  padding-inline-start: 0.5rem;
  list-style: none;
`
