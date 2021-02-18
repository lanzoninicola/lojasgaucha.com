import { isObject, error } from "@utils"

export default function setGatsbyFluidData(dataSource, device) {
  const _isObject = isObject(dataSource)

  const deviceDataSource = dataSource[device]

  console.log(deviceDataSource.edges[0])

  if (!_isObject) {
    return error(
      `setGatsbyFluidData()`,
      `Data passed to gatsby-images must be an object`
    )
  }

  // const isFluidData = deviceDataSource.hasOwnProperty("aspectRatio")
  //   ? true
  //   : false

  // // in case this component is used inside an iterator (map, forEach etc...)
  // if (isFluidData) return deviceDataSource

  // in case this component is used to render a single image
  if (_isObject) {
    const edgesImageData = deviceDataSource?.edges
    return edgesImageData[0].node?.childImageSharp?.fluid
  }
}
