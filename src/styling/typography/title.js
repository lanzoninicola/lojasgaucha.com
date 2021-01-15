import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import useResponsiveSize from "../_hooks/useResponsiveSize"

const Title = styled.div`
  ${Typeface}
  font-size: ${({ theme, as, variant, size, debug }) => {
    if (size && !size?.min) {
      return `${size}px`
    }

    return useResponsiveSize(
      {
        min:
          size?.min || theme.typography[variant][as.toLowerCase()].minFontSize,
        max:
          size?.max || theme.typography[variant][as.toLowerCase()].maxFontSize,
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
  line-height: ${({ theme, as, variant, lh }) => {
    if (lh && !lh?.min) {
      return `${lh}px`
    }

    useResponsiveSize(
      {
        min: theme.typography[variant][as.toLowerCase()].minLineHeight,
        max: theme.typography[variant][as.toLowerCase()].maxLineHeight,
      },
      {
        unit: "px",
      }
    )
  }};
  ${props => props.$style ?? {}}
`

export default Title

Title.defaultProps = {
  variant: "primary",
  weight: "400",
  as: "h1",
  color: "#000000",
}

Title.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
  as: PropTypes.string,
  minSize: PropTypes.string,
  maxSize: PropTypes.string,
}
