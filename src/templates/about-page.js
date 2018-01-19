import Helmet from 'react-helmet';
import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';


export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <Header />
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <div className="section">
                <h2 className="title is-size-3 has-text-primary is-bold-light">{post.frontmatter.title}</h2>
                <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
            <div className="column is-5" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
