import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import { useResponsiveSize } from "@hooks/index"
import { error } from "@utils/index"
import { getFontSize, getLineHeight } from "@typography/lib"

const Text = styled.div`
  ${Typeface}
  font-size: ${({ theme, variant, size, debug }) => {
    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty("body")) {
      error(
        "Text - font-size",
        `Missing related font-size for the variant: "${variant}", `
      )
      return
    }

    const devicesFontSize = themeVariant?.body.fontSize
    const _fontSize = getFontSize(size, devicesFontSize)

    return useResponsiveSize(_fontSize, debug)
  }};
  line-height: ${({ theme, variant, size, lh }) => {
    const themeVariant = theme.typography[variant]
    if (!themeVariant.hasOwnProperty("body")) {
      error(
        "Text - line-height",
        `Missing related line-height for the variant: "${variant}"`
      )
      return
    }

    const deviceslineHeight = themeVariant?.body.lineHeight
    const devicesFontSize = themeVariant?.body.fontSize
    const _lineHeight = getLineHeight(
      lh,
      size,
      deviceslineHeight,
      devicesFontSize
    )

    return useResponsiveSize(_lineHeight)
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
