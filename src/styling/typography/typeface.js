import { css } from "styled-components"
import PropTypes from "prop-types"

import { Space } from "../layouts"
import { useResponsiveSize } from "@hooks"
import { composeCSSValue, getCurrentDeviceValue } from "@layouts/lib/index"
import { isObject } from "@utils"

const Typeface = css`
  ${Space}
  font-family: ${({ theme, variant }) => theme.typography[variant].family};
  font-style: ${({ italic }) => {
    if (italic) return `italic`

    return `normal`
  }};
  font-weight: ${({ weight }) => {
    if (isObject(weight)) return getCurrentDeviceValue(weight)
    if (weight) return weight

    return null
  }};
  text-transform: ${({ capitalize, uppercase, lowercase }) => {
    if (capitalize) return capitalize
    if (uppercase) return `uppercase`
    if (lowercase) return `lowercase`

    return null
  }};
  letter-spacing: ${({ ls }) => {
    if (ls) {
      const letterSpacing = composeCSSValue(ls)
      return useResponsiveSize(letterSpacing)
    }

    return null
  }};
  color: ${({ theme, color }) => {
    if (typeof color === "string") {
      let isHEXColor = color.substring(0, 1) === "#"

      if (isHEXColor) {
        return color
      }
    }

    return theme.colors(color)
  }};
  text-align: ${({ align }) => align};
`

export default Typeface

Typeface.defaultProps = {
  variant: "primary",
}

Typeface.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
}
