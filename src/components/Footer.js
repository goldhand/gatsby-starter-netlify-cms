import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/az-medicare-helpers-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import { NavbarLinks } from './NavbarLinks'

const Footer = class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section has-background-black has-text-white-ter has-text-centered">
          <div className="container">
            <div className="section">
              <div className="content">
                <div className="section-head">
                  <h1 className="title has-text-white-ter">Contact Us</h1>
                  <hr />
                </div>
                <div className="columns">
                  <div className="column is-offset-1 is-5">
                    <a
                      className="contact-info has-text-primary is-size-4-desktop"
                      href="tel:5202227997"
                    >
                      (520) 222-7997
                    </a>
                  </div>
                  <div className="column is-5">
                    <a
                      className="contact-info has-text-primary is-size-4-desktop"
                      href="mailto:info@azmedicarehelpers.com"
                    >
                      info@azmedicarehelpers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <nav className="navbar is-transparent" role="navigation">
            <div className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item has-text-white-ter">
                  <p className="copyright">
                    Copyright © 2021 <a href="/">AZ Medicare Helpers</a>. All
                    rights reserved.
                  </p>
                </div>
              </div>
              <div className="navbar-end is-right">
                <NavbarLinks />
              </div>
            </div>
          </nav>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer
