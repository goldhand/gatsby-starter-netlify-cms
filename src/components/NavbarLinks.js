import * as React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'

export const NavbarLinks = () => (
  <React.Fragment>
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="/contact">
      Contact
    </Link>
                <a title="facebook" className="navbar-item" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
  </React.Fragment>
)
