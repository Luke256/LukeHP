module.exports = {
  siteMetadata: {
    title: `LukeHome`,
    titleTemplate: `%s | Luke`,
    description: `Lukeのホームページです`,
    author: `Y.K`,
    siteUrl: `https://luke256.dev`,
    url: `https://luke256.dev`,
    image: `/assets/icon-96x96.png`,
    twitterUsername: `@Luke02561`,
    lang: `ja`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "Luke",
          short_name: "Luke",
          start_url: "/",
          background_color: "#ffea18",
          theme_color: "#5155c0",
          display: "standalone",
          icon: "src/images/icon.png",
        }
      },
      {
        resolve: "gatsby-plugin-react-svg",
        options: {
          rule: {
            include: /content/,
          }
        }
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/content/posts`
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-copy-linked-files`,
            `gatsby-remark-responsive-iframe`,
            {
                resolve: `gatsby-remark-prismjs`,
                options: {
                    classPrefix: "language-",
                    inlineCodeMarker: null,
                    aliases: {},
                    showLineNumbers: false,
                    noInlineHighlight: false,
                },
            },
          ],
        },
      },
      `gatsby-plugin-twitter`,
      {
        resolve: "gatsby-plugin-firebase",
        options: {
          credentials: {
            apiKey: "AIzaSyAvgJPfCzCnL-qlHzI5sh7DRljk_7E6IJg",
            authDomain: "lukehp-a9018.firebaseapp.com",
            projectId: "lukehp-a9018",
            storageBucket: "lukehp-a9018.appspot.com",
            messagingSenderId: "839622773986",
            appId: "1:839622773986:web:9c7cea7d7ef347c8c662bb",
            measurementId: "G-B7J0YGJ7RG"
          }
        }
      },
  ],
}
