module.exports = {
  siteMetadata: {
    title: `StudyBook`,
    description: `Webチームで学ぶことを心をこめて書いたレポジトリ`,
    author: `@akinori`,
    siteUrl: `https://https://org.wasedasai.net/StudyBook/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `textbook`,
        path: `${__dirname}/textbook/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-code-titles`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
            /*
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: true,
                noInlineHighlight: false,
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
              }
            */
          }
        ]
      }
    },
  ],
}
