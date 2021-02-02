import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import useResponsiveSize from "../_hooks/useResponsiveSize"
import { composeCSSValue } from "../layouts/utils/CSSUnit"

const Text = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    if (size && !size?.min) {
      return `${composeCSSValue(size)}`
    }

    return useResponsiveSize({
      min: size?.min || theme.typography[variant].body.minFontSize,
      max: size?.max || theme.typography[variant].body.maxFontSize,
    })
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
  weight: "400",
  color: "#000000",
}

Text.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
}
