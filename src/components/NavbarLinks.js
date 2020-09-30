import * as React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import useSiteMetadata from './SiteMetadata'

export const NavbarLinks = () => {
  const meta = useSiteMetadata()
  return (
    <React.Fragment>
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <Link className="navbar-item" to="/about/">
        About
      </Link>
      <Link className="navbar-item" to="/contact/">
        Request Info
      </Link>
      <Link className="navbar-item" to="/es/">
        Español
      </Link>
      <a
        title="facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-item"
        href={meta.facebook}
      >
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
    </React.Fragment>
  )
}
