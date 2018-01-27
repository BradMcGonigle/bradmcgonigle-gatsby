import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import Footer from '../components/Footer';
import Header from '../components/Header';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExternalLink from '@fortawesome/fontawesome-pro-light/faExternalLink';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const SectionHeader = styled('div')`
  h1 {
    font-size: 2rem;

    small {
      font-size: 1rem;
      vertical-align: middle;
    }
  }
`

const LinkItem = styled('div')`
  .card {
    height: 100%;

    .card-image {
      background-color: #eee;
      text-align: center;

      span.icon {
        bottom: 0;
        color: #e7e7e7;
        font-size: 3rem;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 250ms color ease-in-out;
        width: 100%;
      }
    }

    .card-content {
      time {
        font-size: 0.875rem;
      }
    }

    &:hover {
      .card-image {
        span.icon {
          color: #e1e1e1;
        }
      }
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
          <div className="container is-fluid">
            <div className="columns">
              <SectionHeader className="column">
                <h1 className="title">Links <small>&mdash; Things I find interesting.</small></h1>
                <div className="columns is-multiline">
                {
                  posts.filter(post => post.node.frontmatter.templateKey === 'link-post').map(({ node: post }) => {
                    return (
                      <LinkItem className="column is-6-tablet is-4-desktop is-3-widescreen" key={post.id}>
                        <a href={post.frontmatter.linkUrl}>
                          <div className="card">
                            <div className="card-image">
                              {
                                post.frontmatter.linkImage ?
                                <Img className="image" sizes={post.frontmatter.linkImage.childImageSharp.sizes} />
                                 :
                                <figure className="is-hidden-mobile image is-3by2">
                                  <span className="icon is-large">
                                    <FontAwesomeIcon icon={faExternalLink} />
                                  </span>
                                </figure>
                              }
                            </div>
                            <div className="card-content">
                              <div className="content">
                                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                <h4>{post.frontmatter.title}</h4>
                              </div>
                            </div>
                          </div>
                        </a>
                      </LinkItem>
                    );
                  })
                }
                </div>
              </SectionHeader>
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
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            templateKey
            linkUrl
            linkImage {
              childImageSharp {
                sizes(
                  maxWidth: 1000,
                  maxHeight: 667,
                  cropFocus: ATTENTION,
                  traceSVG: { color: "#A7DEF6" }
                ) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
