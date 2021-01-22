import { css } from "styled-components"
import PropTypes from "prop-types"

import { Space } from "../layouts/inner"

const Typeface = css`
  ${Space}
  font-family: ${({ theme, variant }) => theme.typography[variant].family};
  font-style: ${({ italic }) => {
    if (italic) return `italic`

    return `normal`
  }};
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ capitalize, uppercase, lowercase }) => {
    if (capitalize) return capitalize
    if (uppercase) return `uppercase`
    if (lowercase) return `lowercase`

    return null
  }};
  letter-spacing: ${({ ls }) => ls ?? null};
  color: ${({ theme, color }) => {
    let isHEXColor = color.substring(0, 1) === "#"

    if (isHEXColor) {
      return color
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
}
