import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/fontawesome-pro-light';


const Links = styled('span')`
  align-items: center;
  display: flex;

  & a {
    padding: 1rem 0.5rem;

    &:hover {
      background-color: #0056d7;
    }
  }
`

class SocialLinks extends React.Component {
  render() {
    return (
      <Links className="social">
        <a href="https://github.com/bradmcgonigle">
          <span className="icon"><FontAwesomeIcon icon={faGithub} inverse /></span>
        </a>
        <a href="https://twitter.com/bradmcgonigle">
          <span className="icon"><FontAwesomeIcon icon={faTwitter} inverse /></span>
        </a>
        <a href="https://facebook.com/bradmcgonigle">
          <span className="icon"><FontAwesomeIcon icon={faFacebook} inverse /></span>
        </a>
        <a href="https://instagram.com/bradmcgonigle">
          <span className="icon"><FontAwesomeIcon icon={faInstagram} inverse /></span>
        </a>
      </Links>
    );
  }
}

export default SocialLinks;
