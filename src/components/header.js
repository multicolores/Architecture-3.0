import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    data-scroll
    data-scroll-sticky
    data-scroll-target="#container"
    style={{
      width: `100%`,
      position: `fixed`,
      top: 0,
      left: 0,
      zIndex: 10,
    }}
  >
    <div className="header" style={{transition: `transform 0.35s ease`,}}>
      <div
      className="links_container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem`,
          height: `80px`,
        }}
      >
            <div>
                <Link to="/" className="logo">
                    Architecture
                </Link>
            </div>
            <div>
                <Link to="/project_1">
                    Work
                </Link>
                {/* <Link to="/gallery">
                    Gallery
                </Link> */}
                <Link to="/#about">
                    About
                </Link>
            </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
