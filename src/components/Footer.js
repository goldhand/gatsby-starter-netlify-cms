import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/az-medicare-helpers-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

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
                  <div className="column">
                    <a
                      className="contact-info has-text-primary"
                      href="tel:5202227997"
                    >
                      <span className="icon">
                        <i className="fas fa-mobile"></i>
                      </span>
                      (520) 222-7997
                    </a>
                  </div>
                  <div className="column">
                    <a
                      className="contact-info has-text-primary"
                      href="https://web.archive.org/web/20200220012047/mailto:info@azmedicarehelpers.com"
                    >
                      <span className="icon">
                        <i className="fas fa-envelope-o"></i>
                      </span>
                      info@azmedicarehelpers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content has-text-white-ter">
                <p className="copyright">
                  Copyright © 2014 <a href="/">AZ Medicare Helpers</a>. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer
