module.exports = {
  siteMetadata: {
    localEnv: process.env.NODE_ENV,
    title: `Lojas Gaucha`,
    description: `Bem vindo na Loja Gaucha, por 15 anos, procuramos soluções para sua casa ao melhor preço.`,
    author: `lanzoni.nicola@gmail.com`,
    officePhone: `46991564002`,
    whatsAppContacts: [
      { fullName: "Mara", wnumber: "46991564002" },
      { fullName: "Nicola", wnumber: "46991564002" },
    ],
    maps: {
      locationName: "LOJAS+GAÚCHA+-+Gazzoni+Eletromóveis+Ltda",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `maps_images`,
        path: `${__dirname}/src/images/company/maps`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero_carousel`,
        path: `${__dirname}/src/images/hero_carousel/mobile`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/global`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
