import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import useResponsiveSize from "../_hooks/useResponsiveSize"

const Text = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    if (size && !size?.min) {
      return `${size}px`
    }

    return useResponsiveSize(
      {
        min: size?.min || theme.typography[variant].body.minFontSize,
        max: size?.max || theme.typography[variant].body.maxFontSize,
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
  line-height: ${({ theme, variant }) =>
    useResponsiveSize({
      min: theme.typography[variant].body.minLineHeight,
      max: theme.typography[variant].body.maxLineHeight,
    })};
  ${props => props.$style ?? {}}
`

export default Text

Text.defaultProps = {
  variant: "primary",
  weight: 400,
  color: "#fff",
}

Text.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
}
