import { css } from "styled-components"
import PropTypes from "prop-types"

import Space from "../layouts/composition/space/space"
import { useResponsiveSize } from "@hooks"
import { getCurrentDeviceValue } from "@layouts/lib/index"
import { isObject } from "@utils"
import { colorsTheme } from "@theme"

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
      return useResponsiveSize(ls)
    }

    return null
  }};
  color: ${({ color, opacity }) => {
    if (typeof color === "string") {
      const isHEXColor = color.substring(0, 1) === "#"
      if (isHEXColor) return color
    }

    if (opacity) {
      return colorsTheme(color, { colorUnit: "rgba", opacity: opacity })
    }

    return colorsTheme(color)
  }};
  text-align: ${({ align, center, right, left }) => {
    if (align) return align
    if (center) return "center"
    if (right) return "right"
    if (left) return "left"

    return null
  }};
  white-space: ${({ newLine, noWrap }) => {
    if (newLine) return "pre-wrap"
    if (noWrap) return "nowrap"

    return null
  }};
  position: ${({ relative, absolute }) => {
    if (relative) return `relative`
    if (absolute) return `absolute`

    return `relative`
  }};
  overflow: ${({ overflowHide, overflowAuto }) => {
    if (overflowHide) return `hidden`
    if (overflowAuto) return `auto`
    return null
  }};
  overflow-x: ${({ overflowXHide, overflowXAuto }) => {
    if (overflowXHide) return `hidden`
    if (overflowXAuto) return `auto`
    return null
  }};
  overflow-y: ${({ overflowYHide, overflowYAuto }) => {
    if (overflowYHide) return `hidden`
    if (overflowYAuto) return `auto`
    return null
  }};
`

export default Typeface

Typeface.defaultProps = {
  variant: "primary",
}

Typeface.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
}
