import * as React from 'react'
import { Link } from 'gatsby'

export const NavbarLinks = () => (
  <React.Fragment>
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="/products">
      Products
    </Link>
    <Link className="navbar-item" to="/blog">
      Blog
    </Link>
    <Link className="navbar-item" to="/contact">
      Contact
    </Link>
  </React.Fragment>
)
