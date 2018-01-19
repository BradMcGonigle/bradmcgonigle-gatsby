import 'bulma';
import 'devicon';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import '../../static/fontawesome/css/font-awesome.css'

require('prismjs/themes/prism-okaidia.css');


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Brad McGonigle" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
