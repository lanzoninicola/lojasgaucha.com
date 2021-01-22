import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import useResponsiveSize from "../_hooks/useResponsiveSize"

const SmallText = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    if (size && !size?.min) {
      return `${composeCSSValue(size)}`
    }

    return useResponsiveSize({
      min:
        composeCSSValue(size?.min) ||
        theme.typography[variant].small.minFontSize,
      max:
        composeCSSValue(size?.max) ||
        theme.typography[variant].small.maxFontSize,
    })
  }};
  line-height: ${({ theme, variant, lh, lineHeight }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue

    if (lh && !lh?.min) {
      return `${composeCSSValue(lh)}`
    }

    if (lineHeight && !lineHeight?.min) {
      return `${composeCSSValue(lineHeight)}`
    }

    useResponsiveSize({
      min: composeCSSValue(theme.typography[variant].small.minLineHeight),
      max: composeCSSValue(theme.typography[variant].small.maxLineHeight),
    })
  }};
  ${props => props.$style ?? {}}
`

export default SmallText

SmallText.defaultProps = {
  variant: "primary",
  weight: "400",
  color: "#000000",
}

SmallText.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
}
