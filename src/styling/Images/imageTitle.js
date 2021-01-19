import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Space } from "../layouts/inner/index"
import { Title } from "../typography"
import colorsTheme from "../_theme/colorsTheme"

/**
 *  Positions:
 *  topLeft, topRight, center, bottomLeft, bottomRight, bottomCenter
 */

const StyledImageTitle = styled.div`
  ${Space}
  background: ${({ bg }) => {
    if (bg) return bg

    return colorsTheme("black")
  }};
  height: auto;
  width: auto;
  position: absolute;
  top: ${({ topLeft, topRight, center, bottomCenter }) => {
    console.log("imageTitle - center", center)
    if (topLeft || topRight) return `8px`
    if (center) return `50%`
    if (bottomCenter) return `85%`

    return null
  }};
  bottom: ${({ bottomLeft, bottomRight }) => {
    if (bottomLeft || bottomRight) return `8px`

    return null
  }};
  left: ${({ topLeft, bottomLeft, center, bottomCenter }) => {
    if (topLeft) return `16px`
    if (bottomLeft) return `16px`
    if (center || bottomCenter) return `50%`

    return null
  }};
  right: ${({ topRight, bottomRight }) => {
    if (topRight) return `16px`
    if (bottomRight) return `16px`

    return null
  }};
  transform: ${({ center, bottomCenter }) => {
    if (center || bottomCenter) return `translate(-50%, -50%)`

    return null
  }};
  ${({ $style }) => $style ?? {}}
`

const ImageTitle = ({ children, bg, ...props }) => {
  return (
    <StyledImageTitle padding="8 4 8 4" bg={bg} {...props}>
      <Title as="h4" color={colorsTheme("white")}>
        {children}
      </Title>
    </StyledImageTitle>
  )
}

ImageTitle.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
}

export default ImageTitle
