import React from "react"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
