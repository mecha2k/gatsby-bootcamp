// Configure your Gatsby site with this file.
// See: https://www.gatsbyjs.org/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: "Full-Stack Bootcamp",
    author: "cstory.com",
  },

  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "9mj0je1dgcjl",
        accessToken: "7tQetEQF0QsQXMtpga7YKHjFIo_d8RYlDdok-04JmAQ",
      },
    },

    "gatsby-plugin-sass",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },

    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
