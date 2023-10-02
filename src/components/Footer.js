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
          <p style="font-size: 12pt;">
Not connected with or endorsed by the United States government or the federal Medicare program or any federal agency. Insurance solicitation. We do not offer every plan available in your area.  Currently we represent at least 10 organizations which offer at least 72 products in your area.  Please contact Medicare.gov, 1- 800 – MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all your options. Plans are insured or covered by a Medicare Advantage (HMO, PPO and PFFS) organization with a Medicare contract and/or a Medicare-approved Part D sponsor. Enrollment in the plan depends on the plan’s contract renewal with Medicare. The insurance services described on this web site are provided by The Medicare Navigators, a GMIA, Inc. company.  GMIA, Inc. is contracted with and may receive compensation from the insurers listed on this website. For more information, please consult our Privacy Policy. Not all plans are available in all regions. This is a solicitation for insurance. Submitting information or calling numbers listed on this website will direct you to a licensed Agent/Broker. Important disclosures about Medicare Plans: Medicare has neither endorsed nor reviewed this information.
          </p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
