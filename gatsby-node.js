/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions }) => {
  // https://goenning.net/2017/07/21/how-to-avoid-relative-path-hell-javascript-typescript-projects/
  // https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/#absolute-imports
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        "@styling": path.resolve(__dirname, "src/styling/"),
        "@hooks": path.resolve(__dirname, "src/styling/hooks/"),
        "@buttons": path.resolve(__dirname, "src/styling/buttons/"),
        "@carousel": path.resolve(__dirname, "src/styling/carousel/"),
        "@decorative": path.resolve(__dirname, "src/styling/decorative/"),
        "@form": path.resolve(__dirname, "src/styling/form/"),
        "@icons": path.resolve(__dirname, "src/styling/icons/"),
        "@images": path.resolve(__dirname, "src/styling/media/images"),
        "@inputs": path.resolve(__dirname, "src/styling/inputs/"),
        "@layouts": path.resolve(__dirname, "src/styling/layouts/inner/"),
        "@templates": path.resolve(__dirname, "src/styling/layouts/templates/"),
        "@layoutUtils": path.resolve(__dirname, "src/styling/layouts/utils/"),
        "@logo": path.resolve(__dirname, "src/styling/logo/"),
        "@maps": path.resolve(__dirname, "src/styling/maps/"),
        "@navbar": path.resolve(__dirname, "src/styling/navbar/"),
        "@navigation": path.resolve(__dirname, "src/styling/navigation/"),
        "@overlays": path.resolve(__dirname, "src/styling/overlays/"),
        "@shape": path.resolve(__dirname, "src/styling/shape/"),
        "@typography": path.resolve(__dirname, "src/styling/typography/"),
        "@theme": path.resolve(__dirname, "src/styling/_theme/"),
        "@utils": path.resolve(__dirname, "src/styling/utils/"),
      },
    },
  })
}
