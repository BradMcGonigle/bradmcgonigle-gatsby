import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import styled from "react-emotion"

import ClientList from '../components/WorkClients';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WorkSkills from '../components/WorkSkills';
import WorkTechnologies from '../components/WorkTechnologies';


const ToolkitWrapper = styled('section')`
  .subtitle {
    display: inline-block;
    border-top: 5px solid #666;
    padding-top: 10px;
  }
`

const Toolkit = () => (
  <ToolkitWrapper className="hero is-dark">
    <div className="hero-head">
      <div className="container">
        <h2 className="subtitle">Skills</h2>
      </div>
    </div>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-html5-plain-wordmark"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-css3-plain-wordmark"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-javascript-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-sass-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-django-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-github-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-webpack-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-gulp-plain"></i>
            </span>
          </div>
          <div className="column has-text-centered">
            <span className="icon devicon is-size-1">
              <i className="devicon-grunt-line"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </ToolkitWrapper>
);

export default class WorkPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns">
              {
                  posts.filter(post => post.node.frontmatter.templateKey === 'work-project').map(({ node: post }) => {
                  return (
                    <Link className="column is-4 content" key={post.id} to={post.frontmatter.path}>
                      <Img sizes={post.frontmatter.projectThumbnail.childImageSharp.sizes} />
                      <p>
                        {post.frontmatter.title}
                      </p>
                      <p>{post.excerpt}</p>
                    </Link>
                  );
                })
              }
            </div>
          </div>
        </section>
        <ClientList />
        <Toolkit />
        <WorkSkills />
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 2000)
          id
          frontmatter {
            date
            path
            title
            templateKey
            url
            projectThumbnail {
              childImageSharp {
                sizes(maxWidth: 520) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
