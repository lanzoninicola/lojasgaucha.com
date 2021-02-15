import { isObject, error } from "@utils"

export default function setGatsbyFluidData(dataSource) {
  const _isObject = isObject(dataSource)

  if (!_isObject) {
    return error(
      `setGatsbyFluidData()`,
      `Data passed to gatsby-images must be an object`
    )
  }

  const isFluidData = dataSource.hasOwnProperty("aspectRatio") ? true : false

  // in case this component is used inside an iterator (map, forEach etc...)
  if (isFluidData) return dataSource

  // in case this component is used to render a single image
  if (_isObject) {
    const edgesImageData = dataSource?.images?.edges
    return edgesImageData[0].node?.childImageSharp?.fluid
  }
}
