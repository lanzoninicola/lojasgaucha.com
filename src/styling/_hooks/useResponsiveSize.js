import { theme } from "@theme/_global-style"

import {
  composeCSSValue,
  getCurrentDiagonal,
  getCurrentDevice,
  breakpointsDesignSpec,
} from "@layouts/lib/index"
import { isObject, isNumber, isString, log } from "@utils/index"

// SOURCE
// https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
// https://fvsch.com/css-locks

export default function useResponsiveSize(size = {}, debug = false) {
  // I can't use ThemeProvider data, some components using this function are mounted
  // before the values requested here (device, diagonal) and located in the "theme" are available
  const { device: currentDeviceFormFactor } = getCurrentDevice()
  const { diagonal: currentViewportDiagonal } = getCurrentDiagonal()
  const { diagonalSpec: viewportDiagonalDesignSpec } = breakpointsDesignSpec(
    currentDeviceFormFactor
  )

  const isFixedSize = !isObject(size) && (isNumber(size) || isString(size))

  log("useResponsiveSize", {
    size,
    typeofSize: typeof size,
    isFixedSize,
    currentDeviceFormFactor: currentDeviceFormFactor,
    userSize: size[currentDeviceFormFactor],
  })

  // TODO: validation of size input
  // if(!isFixedSize && isObject(size)) {

  // }

  let USER_SIZE = isFixedSize ? parseInt(size) : size[currentDeviceFormFactor]

  const resultSize = Math.round(
    (currentViewportDiagonal / viewportDiagonalDesignSpec) * USER_SIZE
  )

  // if (debug) {
  //   log("useResponsiveSize", {
  //     currentDeviceFormFactor,
  //     currentViewportDiagonal,
  //     viewportDiagonalDesignSpec,
  //     inputSize: size,
  //     USER_SIZE,
  //     resultSize,
  //   })
  // }
  return composeCSSValue(resultSize)
}
