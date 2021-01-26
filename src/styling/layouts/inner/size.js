import { css } from "styled-components"
import { composeCSSValue } from "../utils/CSSUnit"
import { isFunction } from "../../utils/index"

const Size = css`
  height: ${({ h, height, h100, h100v, hAuto }) => {
    if (h100) return `100%`
    if (h100v) return `100vh`
    if (hAuto) return `auto`
    if (h || height) {
      let inputValue = h ?? height

      if (isFunction(h)) {
        inputValue = h()
      }

      if (isFunction(height)) {
        inputValue = height()
      }

      return composeCSSValue(inputValue)
    }

    return `auto`
  }};
  width: ${({ w, width, w100, w100v, wAuto }) => {
    if (w100) return `100%`
    if (w100v) return `100vw`
    if (wAuto) return `auto`
    if (w || width) {
      let inputValue = w ?? width

      if (isFunction(w)) {
        inputValue = w()
      }

      if (isFunction(width)) {
        inputValue = width()
      }

      return composeCSSValue(inputValue)
    }

    return `auto`
  }};
`
export default Size
