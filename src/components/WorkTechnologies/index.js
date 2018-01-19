import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"


const TechnologiesListWrapper = styled('div')`
  .subtitle {
    display: inline-block;
    border-top: 5px solid #ddd;
    padding-top: 10px;
  }
`

const DevIcon = styled('span')`
`

class TechnologiesList extends React.Component {
  render() {
    const tags = this.props.tags;
    var tagList = tags.map((tag) => {
      return (
        <div className="column has-text-centered" key={tag}>
          <DevIcon className="icon devicon is-size-1">
            <i className={ `devicon-${tag}-plain colored` }></i>
          </DevIcon>
        </div>
      );
    })

    return (
      <TechnologiesListWrapper className="hero is-light is-hidden-mobile">
        <div className="hero-head">
          <div className="container">
            <h2 className="subtitle has-text-weight-light">Technologies Used</h2>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              {tagList}
            </div>
          </div>
        </div>
      </TechnologiesListWrapper>
    );
  }
}

export default TechnologiesList;
