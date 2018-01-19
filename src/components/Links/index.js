import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

import '../../../static/fontawesome/css/font-awesome.css'


const Links = styled('div')`
  align-items: stretch;
  display: flex;

  .card {
    align-content: end;
    align-items: end;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;

    .card-image {
      background-color: #eee;
      min-height: 212px;
      text-align: center;
      width: 100%;

      .icon {
        color: #ddd;
        display: inline-block;
        font-size: 3em;
        line-height: 212px;
        vertical-align: middle;
      }
    }

    .card-content {
      align-items: bottom;
    }
  }
`

class Links extends React.Component {
  render() {
    const posts = this.props.posts;
    return (
      <Links className="link">
        {posts.filter(post => post.node.frontmatter.templateKey === 'link-post').map(({ node: post }) => {
          return (
            <div className="column is-3" key={post.id}>
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
            </div>
          );
        })}
      </Links>
    );
  }
}

export default Links;
