import React from 'react';
import Link from 'gatsby-link';

import AboutMeCard from '../components/AboutMeCard';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-two-thirds">
                <div className="content">
                  <h1 className="title">Writings <small>&mdash; Thoughts on things</small></h1>
                  {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post').map(({ node: post }) => {
                    return (
                      <div className="content" key={post.id}>
                        <p>
                          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </p>
                        <p>{post.excerpt}</p>
                        <Link className="button is-info is-small" to={post.frontmatter.path}>
                          View Post
                        </Link>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="column is-offset-1">
                <AboutMeCard />
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
  query BlogQuery {
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
          }
        }
      }
    }
  }
`;
