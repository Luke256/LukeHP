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
  ],
}
