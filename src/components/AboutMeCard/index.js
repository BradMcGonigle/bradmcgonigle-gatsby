import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

import SocialLinks from "../SocialLinks"


const AboutMe = styled('div')`

`

class AboutMeCard extends React.Component {
  render() {
    return (
      <AboutMe className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Brad McGonigle</p>
              <p className="subtitle is-6">@bradmcgonigle</p>
            </div>
          </div>

          <div className="content">
            Some junk about me.
            <SocialLinks />
          </div>
        </div>
      </AboutMe>
    );
  }
}

export default AboutMeCard;
