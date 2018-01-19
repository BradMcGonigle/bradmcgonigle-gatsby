import React from "react";


class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="content">
              <p>
                &copy; 2017. All rights reserved. Built with <a href="http://www.gatsbyjs.org" target="_blank">Gatsby</a> and <a href="http://bulma.io" target="_blank">Bulma</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
