import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FlexContainer, Space } from "@layouts/index"
import { Title } from "@typography/index"
import colorsTheme from "@theme/colorsTheme"

/**
 *  Positions:
 *  topLeft, topRight, center, bottomLeft, bottomRight, bottomCenter
 */

const StyledImageTitle = styled.div`
  ${Space}
  background: ${({ bg }) => {
    if (bg) return bg

    return null
  }};
  height: ${({ theme, h, height, fluid }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    if (h ?? height) return composeCSSValue(h) ?? composeCSSValue(height)
    if (fluid) return `auto`

    return `auto`
  }};
  width: ${({ theme, w, width, fluid }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    if (w) return composeCSSValue(w)
    if (width) return composeCSSValue(width)
    if (fluid) return `auto`

    return `auto`
  }};
  position: absolute;
  top: ${({ topLeft, topRight, center, bottomCenter }) => {
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

const ImageTitle = ({ children, bg, text, uppercase, lowercase, ...props }) => {
  return (
    <StyledImageTitle padding="4 4 4 4" bg={bg} {...props}>
      <FlexContainer row centerX centerY>
        <Title
          as="h4"
          size={{ min: 16, max: 20 }}
          color={colorsTheme("white")}
          uppercase
          lowercase
        >
          {text}
        </Title>
        {children}
      </FlexContainer>
    </StyledImageTitle>
  )
}

ImageTitle.propTypes = {
  bg: PropTypes.string,
  text: PropTypes.string.isRequired,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
}

export default ImageTitle
