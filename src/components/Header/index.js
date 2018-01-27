import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';

import SocialLinks from '../SocialLinks'


class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar is-info">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <strong>B &mdash; M.</strong>
            </Link>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="about">
                About
              </Link>
              <Link className="navbar-item" to="work">
                Work
              </Link>
              <Link className="navbar-item" to="blog">
                Blog
              </Link>
              <Link className="navbar-item" to="links">
                Links
              </Link>
              <hr className="navbar-divider" />
              <SocialLinks />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
