module.exports = {
  siteMetadata: {
    title: `FNE BFC - France Nature Environnement Bourgogne Franche-Comté`,
    description: `FNE BFC fédération des associations de protection de la Nature et de l'environnement en Bourgogne Franche-Comté`,
    author: `@FNEasso`,
    lang: `fr`,
    siteUrl: `https://www.fne-bfc.fr`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '4',
        matomoUrl: '//koruku.alwaysdata.net/matomo/',
        siteUrl: 'https://www.fne-bfc.fr'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fne-bfc`,
        short_name: `FNE-BFC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c90c0f`,
        display: `minimal-ui`,
        icon: `src/images/herisson.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,         // use prettier to format JS code output (default)
        svgo: false,             // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        //develop: true, // Activates purging in npm run develop
        printRejected: true,
        whitelist: ['has-text-weight-bold'],
        ignore: ['src/components/dontpurge.sass', 'slick-carousel/slick/slick.css', 'slick-carousel/slick/slick-theme.css'],
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-netlify-cms`, // must be after other CSS plugins, make sure to keep it last in the array
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
