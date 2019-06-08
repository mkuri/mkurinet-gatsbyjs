import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RecentPosts from "../components/recent-posts"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>機械学習や自動運転に興味のある自動車メーカーエンジニアのブログです。</p>
    <RecentPosts recentPosts={ data.allContentfulBlogPost.edges } />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allContentfulBlogPost(filter: {node_locale: {eq: "ja-JP"}}, sort: {fields: dateUpdated, order: DESC}) {
      edges {
        node {
          title
          slug
          dateCreated
          dateUpdated
          tags {
            name
          }
        }
      }
    }
  }
`
