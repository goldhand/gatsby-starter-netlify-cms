module.exports = {
  siteMetadata: {
    title: 'AZ Medicare Helpers',
    description: 'Providing Simple Answers to Your Medicare Questions',
    facebook: 'https://www.facebook.com/AZMH65/',
    url: "https://www.azmedicarehelpers.com", // No trailing slash allowed!
    siteUrl: "https://www.azmedicarehelpers.com", // No trailing slash allowed!
    image: "/images/og-image.png", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@foo"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,100,300,500,700,400italic,900,500italic`,
          `EB+Garamond`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/blog`, `/blog/*`, `/tags`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AZ Medicare Helpers`,
        short_name: `AZ Medicare`,
        description: `Providing Simple Answers to Your Medicare Questions`,
        lang: `en`,
        display: `standalone`,
        icon: `static/img/apple-touch-icon.png`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ab051f`,
        localize: [
          {
            start_url: `/es/`,
            lang: `es`,
            name: `Ayudantes de AZ Medicare`,
            short_name: `AZ Medicare`,
            description: `Proporcionar respuestas simples a sus preguntas sobre Medicare`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        globDirectory: 'public',
        globPatterns: ['*/**'],
        cacheId: `gatsby-plugin-offline`,
        skipWaiting: true,
        clientsClaim: true,
        directoryIndex: 'index.html',
        runtimeCaching: [
          {
            urlPattern: /.*/,
            handler: 'cacheFirst',
            options: {
              cacheableResponse: {
                statuses: [0, 200]
              },
            }
          },
        ]
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
