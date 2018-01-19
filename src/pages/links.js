import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import AboutMeCard from '../components/AboutMeCard';
import Footer from '../components/Footer';
import Header from '../components/Header';


import PropTypes from "prop-types";
import styled from "react-emotion";

import '../../static/fontawesome/css/font-awesome.css'


const LinkItem = styled('div')`
  align-items: stretch;
  display: flex;

  .card {
    align-content: strech;
    align-items: strech;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;

    .card-image {
      background-color: #eee;
      min-height: 200px;
      text-align: center;
      width: 100%;

      .icon {
        color: #ddd;
        display: inline-block;
        font-size: 3em;
        line-height: 200px;
        vertical-align: middle;
      }
    }

    .card-content {
      align-items: bottom;
    }
  }
`

export default class LinkPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title">Links</h1>
                <h2 className="subtitle">Things I find interesting.</h2>
                <div className="columns is-multiline">
                {posts.filter(post => post.node.frontmatter.templateKey === 'link-post').map(({ node: post }) => {
                  return (
                    <div className="column is-3">
                      <LinkItem key={post.id}>
                        <a href={post.frontmatter.linkUrl}>
                          <div className="card">
                            <div className="card-image">
                              <figure className="image">
                                { post.frontmatter.linkImage ?
                                  <img
                                    src={post.frontmatter.linkImage.childImageSharp.resize.src}
                                  /> :
                                  <span className="icon">
                                    <i className="fa fa-external-link" />
                                  </span>
                                }
                              </figure>
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <h4>{post.frontmatter.title}</h4>
                                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                              </div>
                            </div>
                          </div>
                        </a>
                      </LinkItem>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query LinkQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 2000)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            templateKey
            linkUrl
            linkImage {
              childImageSharp {
                sizes(maxWidth: 520) {
                  ...GatsbyImageSharpSizes
                }
                resize(width: 300, height: 200, quality: 100, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
