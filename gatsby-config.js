module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    siteUrl: `https://www.bradmcgonigle.com`,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `YOUR_GOOGLE_TAGMANAGER_ID`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {},                                  // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [],                           // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true,                   // boolean to turn off the default security headers
        mergeLinkHeaders: false,                      // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true,                    // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/work`,
        name: `work`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 2000,
              sizeByPixelDensity: true,
              quality: 90,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
        ]
      }
    },
  ]
};
