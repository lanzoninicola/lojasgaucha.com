import { theme } from "@theme/_global-style"

import { composeCSSValue } from "@layouts/index"
import { isObject, error, log } from "@utils/index"
import { isUndefined } from "../utils"

// TODO using combineCSSValues function to cover also other units, not only PX

export default function useResponsiveSize(
  viewport = {},
  size = {},
  debug = false,
  component
) {
  // if (!viewport.hasOwnProperty(device)) {
  //   error(
  //     "useResponsiveSize",
  //     `Viewport data is: ${JSON.stringify(
  //       viewport
  //     )}. Attempted to call the useResponsiveSize hook outside of 'theme' context. Make sure your component is rendered inside 'ThemeProvider' component, part of 'styled-component' module`
  //   )
  //   return
  // }
  let { device, diagonal } = viewport
  const DEFAULT_DEVICE = "mobile"
  if (isUndefined(device)) device = DEFAULT_DEVICE
  const DEVICES_BREAKPOINTS = theme?.breakpoints
  const REFERENCE_DEVICE = DEVICES_BREAKPOINTS?.designReference[device]
  const REFERENCE_VIEWPORT_DIAGONAL =
    DEVICES_BREAKPOINTS?.viewportDevices[device][REFERENCE_DEVICE].diagonal
  let REFERENCE_SIZE = 0
  if (!isObject(size)) {
    REFERENCE_SIZE = parseInt(size)
  } else {
    REFERENCE_SIZE = size[device]
  }
  const CURRENT_VIEWPORT_DIAGONAL = diagonal
  let resultSize = 0
  resultSize = Math.round(
    (CURRENT_VIEWPORT_DIAGONAL / REFERENCE_VIEWPORT_DIAGONAL) * REFERENCE_SIZE
  )
  if (debug) {
    log("useResponsiveSize", {
      component,
      DEVICES_BREAKPOINTS,
      REFERENCE_DEVICE,
      REFERENCE_VIEWPORT_DIAGONAL,
      REFERENCE_SIZE,
      CURRENT_VIEWPORT_DIAGONAL,
      resultSize,
    })
  }
  return composeCSSValue(resultSize)
}
