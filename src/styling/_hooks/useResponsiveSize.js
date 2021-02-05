import * as React from "react"
import { ThemeContext } from "styled-components"

import { useViewportInfo } from "@hooks/index"
import { composeCSSValue } from "@layouts/index"

import { isObject, log } from "@utils/index"

// TODO using combineCSSValues function to cover also other units, not only PX

export default function useResponsiveSize(size = {}, debug = false) {
  const { device, diagonal } = useViewportInfo()
  const themeContext = React.useContext(ThemeContext)

  const DEVICES = themeContext?.breakpoints
  const REFERENCE_DEVICE = DEVICES?.designReference[device]
  const REFERENCE_VIEWPORT_DIAGONAL =
    DEVICES?.viewportDevices[device][REFERENCE_DEVICE].diagonal

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
      DEVICES,
      REFERENCE_DEVICE,
      REFERENCE_VIEWPORT_DIAGONAL,
      REFERENCE_SIZE,
      CURRENT_VIEWPORT_DIAGONAL,
      resultSize,
    })
  }

  return composeCSSValue(resultSize)
}
