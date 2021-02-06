import { css } from "styled-components"
import { isFunction } from "@utils/index"

import { useResponsiveSize } from "@hooks/index"

const Size = css`
  height: ${({ h, height, h100, h100v, hAuto }) => {
    if (h100) return `100%`
    if (h100v) return `100vh`
    if (hAuto) return `auto`
    if (h || height) {
      let inputValue = h ?? height

      return useResponsiveSize(inputValue)
    }

    return `auto`
  }};
  width: ${({ w, width, w100, w100v, wAuto }) => {
    if (w100) return `100%`
    if (w100v) return `100vw`
    if (wAuto) return `auto`
    if (w || width) {
      let inputValue = w ?? width

      return useResponsiveSize(inputValue)
    }

    return `auto`
  }};
`
export default Size
