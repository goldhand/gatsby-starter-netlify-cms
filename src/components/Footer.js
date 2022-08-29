import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/az-medicare-helpers-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import { NavbarLinks } from './NavbarLinks'

const Footer = () => {
  const year = new Date().getFullYear()
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
                    href="tel:5202229442"
                  >
                    (520) 222-9442
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
                  {`Copyright © ${year}`} <a href="/">AZ Medicare Helpers</a>.
                  All rights reserved.
                </p>
              </div>
            </div>
            <div className="navbar-end is-right">
              <NavbarLinks />
            </div>
          </div>
        </nav>
        <div class="has-text-white-ter footer-disclaimer">
          <p>This is a solicitation for insurance. Submitting information or calling numbers listed on this website will direct you to a licensed Agent/Broker.</p>
          <p>Important disclosures about Medicare Plans: Medicare has neither endorsed nor reviewed this information. Not connected or affiliated with any United States Government or State agency. We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.</p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
