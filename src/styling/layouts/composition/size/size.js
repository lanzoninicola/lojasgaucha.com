import { css } from "styled-components"

import { composeCSSValue } from "@layouts/lib/index"
import { useResponsiveSize } from "@hooks/index"

const Size = css`
  height: ${({ h, height, h100, h100v, hAuto, hFixed }) => {
    if (h100) return `100%`
    if (h100v) return `100vh`
    if (hAuto) return `auto`
    if (h || height) {
      let inputValue = h ?? height

      if (hFixed) return composeCSSValue(inputValue)

      return useResponsiveSize(inputValue)
    }
    return `auto`
  }};
  width: ${({ w, width, w100, w100v, wAuto, wFixed }) => {
    if (w100) return `100%`
    if (w100v) return `100vw`
    if (wAuto) return `auto`
    if (w || width) {
      let inputValue = w ?? width

      if (wFixed) return composeCSSValue(inputValue)

      return useResponsiveSize(inputValue)
    }

    return `auto`
  }};
`
export default Size
