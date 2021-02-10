import { theme } from "@theme/_global-style"

import {
  composeCSSValue,
  getCurrentDiagonal,
  getCurrentDevice,
} from "@layouts/lib/index"
import {
  isUndefined,
  isObject,
  isNumber,
  isString,
  error,
  log,
} from "@utils/index"

// SOURCE
// https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
// https://fvsch.com/css-locks

function breakpointsDesignSpec(currentDevice, userBreakpoints = {}) {
  const breakpoints = theme?.breakpoints ?? userBreakpoints

  if (isUndefined(breakpoints) || breakpoints === null) {
    error(
      `breakpointsDesignSpec()`,
      `Breakpoints has not been defined. Please adding a "breakpoints" object to the "theme" object through ThemeProvider component or passing it to the function as first parameter`
    )
    return
  }

  const DEVICE_SPEC = breakpoints?.designSpecification[currentDevice]
  console.log(currentDevice, DEVICE_SPEC)
  const VIEWPORT_DIAGONAL_SPEC =
    breakpoints?.viewportDevices[currentDevice][DEVICE_SPEC].diagonal

  return { diagonalSpec: VIEWPORT_DIAGONAL_SPEC }
}

export default function useResponsiveSize(
  viewport = {},
  size = {},
  debug = false,
  component
) {
  // I can't use ThemeProvider data, some components using this function are mounted
  // before the values requested here (device, diagonal) and located in the "theme" are available
  const { device: currentDeviceFormFactor } = getCurrentDevice()
  console.log(currentDeviceFormFactor)
  const { diagonal: currentViewportDiagonal } = getCurrentDiagonal()
  const { diagonalSpec: viewportDiagonalDesignSpec } = breakpointsDesignSpec(
    currentDeviceFormFactor
  )

  const isFixedSize = !isObject(size) && (isNumber(size) || isString(size))

  // TODO: validation of size input
  // if(!isFixedSize && isObject(size)) {

  // }

  let USER_SIZE = isFixedSize ? parseInt(size) : size[currentDeviceFormFactor]

  const resultSize = Math.round(
    (currentViewportDiagonal / viewportDiagonalDesignSpec) * USER_SIZE
  )

  if (debug) {
    log("useResponsiveSize", {
      currentDeviceFormFactor,
      currentViewportDiagonal,
      viewportDiagonalDesignSpec,
      USER_SIZE,
      resultSize,
    })
  }
  return composeCSSValue(resultSize)
}
