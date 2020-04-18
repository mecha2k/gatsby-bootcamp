import React from "react"
import { Link } from "gatsby"

import "./header.scss"

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
