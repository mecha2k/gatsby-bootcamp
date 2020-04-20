import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

class Index extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Hello</h1>
          <h2>Full-stack developer living in Korea.</h2>
          <p>
            Need a developer? <Link to="/contact">Contact me.</Link>
          </p>
        </Layout>
      </div>
    )
  }
}

export default Index
