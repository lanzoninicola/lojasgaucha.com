import { isObject, isNotUndefined, error } from "@utils"

export default function setGatsbyFluidData(dataSource, device) {
  const _isObject = isObject(dataSource)
  const hasDataBreakpointInfo = isNotUndefined(dataSource?.[device])
  let _dataSource = {}

  if (!hasDataBreakpointInfo) _dataSource = dataSource

  if (hasDataBreakpointInfo) _dataSource = dataSource[device]

  if (!_isObject) {
    return error(
      `setGatsbyFluidData()`,
      `Data passed to gatsby-images must be an object`
    )
  }

  const isFluidData = _dataSource.hasOwnProperty("aspectRatio") ? true : false

  // in case this component is used inside an iterator (map, forEach etc...)
  if (isFluidData) return _dataSource

  // in case this component is used to render a single image
  if (_isObject) {
    const edgesImageData = _dataSource?.edges
    return edgesImageData[0].node?.childImageSharp?.fluid
  }
}
