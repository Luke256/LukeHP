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
          name: "明日の自分のために",
          short_name: "gan0803blog",
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
            include: /assets/,
          }
        }
      }
  ],
}
