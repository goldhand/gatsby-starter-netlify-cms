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
      <footer className="footer">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content has-text-white-ter">
              <p className="copyright">Copyright © 2014 <a href="/">AZ Medicare Helpers</a>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
