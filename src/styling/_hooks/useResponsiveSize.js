import { composeCSSValue, breakpointsDesignSpec } from "@layouts/lib/index"
import { useViewportInfo } from "@hooks"
import { isObject, isNumber, isString, log } from "@utils/index"

// SOURCE
// https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
// https://fvsch.com/css-locks

export default function useResponsiveSize(
  size = {},
  debug = false
  // userDiagonal
) {
  // I can't use ThemeProvider data, some components using this function are mounted
  // before the values requested here (device, diagonal) and located in the "theme" are available
  const {
    device: currentDeviceFormFactor,
    diagonal: currentViewportDiagonal,
  } = useViewportInfo()
  const { diagonalSpec: viewportDiagonalDesignSpec } = breakpointsDesignSpec(
    currentDeviceFormFactor
  )

  let userSize = 0
  let userUnit = null
  let resultSize = 0

  const isFixedSize = isNumber(size) || isString(size)
  const isResponsiveSize = isObject(size)

  if (isFixedSize) {
    const { value, unit } = composeCSSValue(size)
    userSize = value
    userUnit = unit
  }

  if (isResponsiveSize) {
    const responsiveSize = size[currentDeviceFormFactor] ?? 0
    const { value, unit } = composeCSSValue(responsiveSize)
    userSize = value
    userUnit = unit
  }

  if (userUnit === "px" || userUnit === "PX") {
    resultSize = Math.round(
      (currentViewportDiagonal / viewportDiagonalDesignSpec) * userSize
    )
  } else {
    resultSize = userSize
  }

  if (debug) {
    log("useResponsiveSize", {
      currentViewportDiagonal,
      viewportDiagonalDesignSpec,
      userSize,
      userUnit,
      resultSize,
    })
  }

  return `${resultSize}${userUnit}`
}
