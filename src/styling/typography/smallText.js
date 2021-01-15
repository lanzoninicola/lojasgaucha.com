import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import useResponsiveSize from "../_hooks/useResponsiveSize"

const SmallText = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    if (size && !size?.min) {
      return `${size}px`
    }

    return useResponsiveSize(
      {
        min: size?.min || theme.typography[variant].small.minFontSize,
        max: size?.max || theme.typography[variant].small.maxFontSize,
      },
      {
        unit: "px",
        // debug: {
        //   fired: debug !== "" ? true : false,
        //   message: debug !== "" ? debug : false,
        // },
      }
    )
  }};
  line-height: ${({ theme, variant, lineHeight }) => {
    if (lineHeight && !lineHeight?.min) {
      return `${lineHeight}px`
    }

    useResponsiveSize({
      min: theme.typography[variant].small.minLineHeight,
      max: theme.typography[variant].small.maxLineHeight,
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
