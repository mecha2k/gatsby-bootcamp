import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
