require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `LukeHome`,
        titleTemplate: `%s | Luke`,
        description: `Student / Programmer`,
        author: `Y.K`,
        siteUrl: `https://luke256.dev`,
        url: `https://luke256.dev`,
        image: `/icons/icon-512x512.png`,
        twitterUsername: `@Luke02561`,
        lang: `ja`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
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
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                        options: {
                            destinationDir: f => `downloads/${f.hash}/${f.name}`,
                            ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            wrapperStyle: `padding: 16px;`,
                        },
                    },
                    `gatsby-remark-autolink-headers`
                ],
            },
        },
        `gatsby-plugin-twitter`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-B7J0YGJ7RG"
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
        `gatsby-plugin-fontawesome-css`
    ],
}
