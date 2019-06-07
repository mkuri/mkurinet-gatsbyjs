import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>機械学習や自動運転に興味のある自動車メーカーエンジニアのブログです。</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <p>{node.title}</p>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
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
