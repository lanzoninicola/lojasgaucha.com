import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import { useResponsiveSize } from "@hooks/index"
import { composeCSSValue } from "@layouts/index"

import { isUndefined, warn, error } from "@utils/index"

const StyledTitle = styled.div`
  ${Typeface}
  font-size: ${({ theme, as, variant, size, debug }) => {
    const { device, diagonal } = theme?.viewport

    if (isUndefined(as)) as = "h1"

    const variantSelected = theme.typography[variant]
    if (!variantSelected.hasOwnProperty(as)) {
      error(
        "Title - font-size",
        `For the variant: "${variant}", missing the relative font-size`
      )
      return
    }

    let fontSize = 0
    size
      ? (fontSize = composeCSSValue(size))
      : (fontSize = variantSelected[as.toLowerCase()].fontSize)

    return useResponsiveSize({ device, diagonal }, fontSize, debug)
  }};
  line-height: ${({ theme, as, variant, size, lh }) => {
    const { device, diagonal } = theme?.viewport
    if (isUndefined(as)) as = "h1"

    const variantSelected = theme.typography[variant]
    if (!variantSelected.hasOwnProperty(as)) {
      error(
        "Title - line-height",
        `For the variant: "${variant}", missing the relative line-height`
      )
      return
    }

    let lineHeight = 0
    lh
      ? (lineHeight = composeCSSValue(lh))
      : size // if I declared a size for the font-size
      ? (lineHeight = parseInt(size) + 3) // I will calculate the line-height adding 3pxs
      : (lineHeight = variantSelected[as.toLowerCase()].lineHeight)

    return useResponsiveSize({ device, diagonal }, lineHeight)
  }};
  ${props => props.$style ?? {}}
`

const Title = props => <StyledTitle {...props} />

Title.defaultProps = {
  variant: "primary",
  weight: "400",
  color: "#000000",
}

Title.propTypes = {
  variant: PropTypes.string,
  weight: PropTypes.string,
  as: (props, propName, componentName) => {
    if (typeof props[propName] !== "string") {
      error(
        `${componentName}`,
        `The "${propName}" prop for the component ${componentName} must be a string.`
      )
    }

    if (isUndefined(props[propName]) || props[propName] === "") {
      warn(
        `${componentName}`,
        `"${propName}" prop (typeof "string") is missing, so the value "h1" has been assigned as the default. Define your "${propName}" prop value to declare the "Header HTML Tag".`
      )
    }
  },
}

export default Title
