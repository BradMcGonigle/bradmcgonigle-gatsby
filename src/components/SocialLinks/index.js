import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import '../../../static/fontawesome/css/font-awesome.css'


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
          <span className="icon"><i className="fa fa-github fa-inverse" /></span>
        </a>
        <a href="https://twitter.com/bradmcgonigle">
          <span className="icon"><i className="fa fa-twitter fa-inverse" /></span>
        </a>
        <a href="https://facebook.com/bradmcgonigle">
          <span className="icon"><i className="fa fa-facebook fa-inverse" /></span>
        </a>
        <a href="https://instagram.com/bradmcgonigle">
          <span className="icon"><i className="fa fa-instagram fa-inverse" /></span>
        </a>
      </Links>
    );
  }
}

export default SocialLinks;
