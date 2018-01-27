import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'


const SkillsListWrapper = styled('div')`

`

class SkillsList extends React.Component {
  render() {
    return (
      <SkillsListWrapper className="container">
        <div className="columns">
          <div className="column is-4">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain"></i>
            </span>
            <h3 className="heading">Front-end Development</h3>
            <p>I create quick HTML, CSS & JS prototypes for early testing purposes as well as production-ready sophisticated front-end architectures.</p>
          </div>
          <div className="column is-4">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain"></i>
            </span>
            <h3 className="heading">User Interface Design</h3>
            <p>I have an eye for detail, passion for color theory & psychology, enjoy playing with type and breaking the grid. I value simplicity and clarity.</p>
          </div>
          <div className="column is-4">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain"></i>
            </span>
            <h3 className="heading">Product Evaluation</h3>
            <p>I do heuristic analysis, moderate usability testing sessions and conduct project evaluation workshops with project stakeholders.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-4">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain"></i>
            </span>
            <h3 className="heading">Interaction Design</h3>
            <p>From paper sketches to visual or living prototypes—I design easy to use and engaging interfaces for desktop and mobile.</p>
          </div>
          <div className="column is-4">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain"></i>
            </span>
            <h3 className="heading">Information Architecture</h3>
            <p>I’m good at analyzing and organizing data. I like to have my opinion on site content outline, enjoy creating site maps and content diagrams.</p>
          </div>
        </div>
      </SkillsListWrapper>
    );
  }
}

export default SkillsList;
