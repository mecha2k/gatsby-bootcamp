import React from "react"

import Layout from "../componenets/layout"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <p>Posts will show up here later on.</p>
      </Layout>
    </div>
  )
}

export default Blog
