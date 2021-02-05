import * as React from "react"
import { ThemeContext } from "styled-components"

import { useViewportInfo } from "@hooks/index"
import { composeCSSValue } from "@layouts/index"

//TODO using combineCSSValues function to cover also other units, not only PX

export default function useResponsiveFont(
  { min = 0, max = 0 },
  options = { unit: "px", debug: { fired: false, message: "" } }
) {
  const { diagonal } = useViewportInfo()
  const themeContext = React.useContext(ThemeContext)

  let resultSize = 0

  const MIN_VIEWPORT_DIAGONAL = parseInt(
    themeContext.breakpoints.xxsmall.diagonal
  )
  const MAX_VIEWPORT_DIAGONAL = parseInt(
    themeContext.breakpoints.large.diagonal
  )
  const CURRENT_VIEWPORT_DIAGONAL = parseInt(diagonal)

  const MIN_FONTSIZE = parseInt(min)
  const MAX_FONTSIZE = parseInt(max)

  if (diagonal < MIN_VIEWPORT_DIAGONAL) {
    resultSize = composeCSSValue(MIN_FONTSIZE)
    return resultSize
  }

  if (diagonal > MAX_VIEWPORT_DIAGONAL) {
    resultSize = composeCSSValue(MAX_FONTSIZE)
    return resultSize
  }

  resultSize = parseInt(
    (CURRENT_VIEWPORT_DIAGONAL / MIN_VIEWPORT_DIAGONAL) * MIN_FONTSIZE
  )

  return composeCSSValue(resultSize)
}
