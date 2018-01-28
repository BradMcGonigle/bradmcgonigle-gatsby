import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'


const Hero = () => (
  <div>
    <div className="hero is-info is-fullheight">
      <div className="hero-top">
        <Header />
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-5 content">
              <h1 className="title">Hi, I'm Brad.</h1>
              <h2 className="subtitle">I build things on the internet.</h2>
              <p>I'm a frontend developer and product designer with a broad range of skills and expertise in user experience design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }

  render() {
    console.log(this.props);
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Helmet>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <Hero />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date
            path
          }
        }
      }
    }
  }
`;
