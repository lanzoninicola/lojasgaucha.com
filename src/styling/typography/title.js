import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Typeface from "./typeface"

import { useResponsiveSize } from "@hooks/index"

import { isUndefined, warn, error } from "@utils/index"

const StyledTitle = styled.div`
  ${Typeface}
  font-size: ${({ theme, as, variant, size, debug }) => {
    if (isUndefined(as)) as = "h1"

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
    if (isUndefined(as)) as = "h1"

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
  minSize: PropTypes.string,
  maxSize: PropTypes.string,
}

export default Title
