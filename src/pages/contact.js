import React from "react"

import Layout from "../components/layout"

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Contact</h1>
          <p>
            The best way to reach me is via{" "}
            <a href="https://twitter.com/@andrew_j_mead" target="">
              andrew_j_mead
            </a>
          </p>
        </Layout>
      </div>
    )
  }
}

export default Contact
