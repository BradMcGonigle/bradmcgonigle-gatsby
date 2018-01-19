import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={`Links | ${post.frontmatter.title}`} />
      <Header />
      <section className="section">
        <div className="container content">
          <h1 className="title is-size-2 has-text-info is-bold-light">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query LinkPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        linkUrl
      }
    }
  }
`;
