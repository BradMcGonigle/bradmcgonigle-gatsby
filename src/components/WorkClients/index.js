import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

import SocialLinks from "../SocialLinks"


const ClientListWrapper = styled('div')`

`

class ClientList extends React.Component {
  render() {
    return (
      <ClientListWrapper className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Web</p>
            <p className="title">NASCAR</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Web</p>
            <p className="title">Karma Automotive</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Email Marketing</p>
            <p className="title">Disney</p>
          </div>
        </div>
      </ClientListWrapper>
    );
  }
}

export default ClientList;
