import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import styled from "react-emotion";

import Footer from '../components/Footer';
import Header from '../components/Header';
import WorkTechnologies from '../components/WorkTechnologies';


const WorkDetailWrapper = styled('section')`
  .subtitle {
    display: inline-block;
    border-top: 5px solid #666;
    padding-top: 10px;
  }
`

const WorkDetail = ({post}) => (
  <WorkDetailWrapper className="hero is-dark">
    <div className="hero-head">
      <div className="container">
        <h2 className="subtitle">Project Summary</h2>
      </div>
    </div>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p className="heading is-uppercase has-text-weight-light">Product Type</p>
            <p>{post.frontmatter.type}</p>
          </div>
          <div className="column">
            <p className="heading is-uppercase has-text-weight-light">Lifespan</p>
            <p>{post.frontmatter.lifespan}</p>
          </div>
          <div className="column">
            <p className="heading is-uppercase has-text-weight-light">Contribution</p>
            <p>{post.frontmatter.contribution}</p>
          </div>
          <div className="column">
            <p className="heading is-uppercase has-text-weight-light">Skills Exercised</p>
            <p>{post.frontmatter.skills}</p>
          </div>
        </div>
      </div>
    </div>
  </WorkDetailWrapper>
);

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`Work | ${post.frontmatter.title}`} />
      <Header />
      <section className="section">
        <div className="container">
          <h3 className="is-uppercase">From the Portfolio</h3>
          <h1 className="title is-size-2 has-text-info is-bold-light">{post.frontmatter.title}</h1>
          <h3 className="subtitle"><a href={post.frontmatter.url} target="_blank">{post.frontmatter.url}</a></h3>
          <div className="columns">
            <div className="column is-7">
              <p className="content">{post.frontmatter.description}</p>
            </div>
          </div>
        </div>
      </section>
      {
        post.frontmatter.technologies &&
        <WorkTechnologies tags={post.frontmatter.technologies} />
      }
      <WorkDetail post={post} />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query WorkPorjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        projectThumbnail {
          childImageSharp {
            sizes(maxWidth: 520) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        url
        type
        lifespan
        contribution
        skills
        technologies
      }
    }
  }
`;
