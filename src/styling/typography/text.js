import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import { useResponsiveSize } from "@hooks/index"
import { composeCSSValue } from "@layouts/index"

import { error } from "@utils/index"

const Text = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    const { device, diagonal } = theme?.viewport
    let fontSize = 0
    size
      ? (fontSize = composeCSSValue(size))
      : (fontSize = theme.typography[variant]?.body?.fontSize)

    const variantSelected = theme.typography[variant]
    if (!variantSelected.hasOwnProperty("body")) {
      error(
        "Text - font-size",
        `For the variant: "${variant}", missing the relative font-size`
      )
      return
    }

    return useResponsiveSize({ device, diagonal }, fontSize, debug)
  }};
  line-height: ${({ theme, variant, size, lh }) => {
    const { device, diagonal } = theme?.viewport

    let lineHeight = 0
    lh
      ? (lineHeight = composeCSSValue(lh))
      : size // if I declared a size for the font-size
      ? (lineHeight = parseInt(size) + 3) // I will calculate the line-height adding 3pxs
      : (lineHeight = theme.typography[variant]?.body?.lineHeight)

    const variantSelected = theme.typography[variant]
    if (!variantSelected.hasOwnProperty("body")) {
      error(
        "Text - line-height",
        `For the variant: "${variant}", missing the relative line-height`
      )
      return
    }

    return useResponsiveSize({ device, diagonal }, lineHeight)
  }};
  ${props => props.$style ?? {}}
`

Text.defaultProps = {
  variant: "secondary",
  weight: "400",
  color: "#000000",
}

Text.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
}

export default Text
