import * as React from "react"
import { ThemeContext } from "styled-components"

import { useViewportInfo } from "@hooks/index"
import { composeCSSValue } from "@layouts/index"

import { log } from "@utils/index"

// TODO using combineCSSValues function to cover also other units, not only PX

export default function useResponsiveSize(size = {}, debug = false) {
  const { device, diagonal } = useViewportInfo()
  const themeContext = React.useContext(ThemeContext)

  const DEVICES = themeContext?.breakpoints
  const REFERENCE_DEVICE = DEVICES?.designReference[device]
  const REFERENCE_VIEWPORT_DIAGONAL =
    DEVICES?.viewportDevices[device][REFERENCE_DEVICE].diagonal
  const REFERENCE_SIZE = size[device]

  console.log(REFERENCE_SIZE)

  const CURRENT_VIEWPORT_DIAGONAL = diagonal

  const MIN_VIEWPORT_DIAGONAL = parseInt(DEVICES?.xxsmall?.diagonal)
  const MAX_VIEWPORT_DIAGONAL = parseInt(DEVICES?.large?.diagonal)
  // const MIN_SIZE = parseInt(min) // this could be explicitly passed as a function parameter or come from a global configuration
  // const MAX_SIZE = parseInt(max) // this could be explicitly passed as a function parameter or come from a global configuration

  let resultSize = 0

  // // This works like media-query.
  // // Interrupting the decrease in size when the diagonal size is greater than what I defined and assign an atomic value.
  // if (diagonal < MIN_VIEWPORT_DIAGONAL) {
  //   resultSize = composeCSSValue(MIN_SIZE)
  //   return resultSize
  // }

  // // This works like media-query.
  // // Interrupting the increase in size when the diagonal size is greater than what I defined and assign an atomic value.
  // if (diagonal > MAX_VIEWPORT_DIAGONAL) {
  //   resultSize = composeCSSValue(MAX_SIZE)
  //   return resultSize
  // }

  resultSize = Math.round(
    (CURRENT_VIEWPORT_DIAGONAL / REFERENCE_VIEWPORT_DIAGONAL) * REFERENCE_SIZE
  )

  if (debug) {
    log("useResponsiveSize", {
      resultSize,
      CURRENT_VIEWPORT_DIAGONAL,
      MIN_VIEWPORT_DIAGONAL,
      // MIN_SIZE,
    })
  }

  return composeCSSValue(resultSize)
}
