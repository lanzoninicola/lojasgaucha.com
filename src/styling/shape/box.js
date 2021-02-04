import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colorsTheme } from "@theme/index"
import { Size, FlexContainer, composeCSSValue } from "@layouts/index"
import { isUndefined, warn } from "@utils/index"

const StyledBox = styled.div`
  ${Size}
  padding: ${({ p }) => p ?? `3px 10px 3px 10px`};
  background: ${({ bg, opacity }) => {
    return colorsTheme(bg, {
      colorUnit: "rgba",
      opacity: opacity ?? 1,
    })
  }};
  border-radius: ${({ br }) => {
    if (br) return composeCSSValue(br)
    return null
  }};
`

const Box = ({ bg, opacity, br, children, ...props }) => {
  return (
    <FlexContainer row centerY wAuto>
      <StyledBox bg={bg} opacity={opacity} br={br} {...props}>
        <FlexContainer h100 w100 centerX>
          {children}
        </FlexContainer>
      </StyledBox>
    </FlexContainer>
  )
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  bg: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      warn(
        componentName,
        `${componentName} - The "${propName}" prop is undefined, this is meaning you are using a box without background. It will not visible inside the canvas.`
      )
    }
  },
  opacity: PropTypes.string,
  br: PropTypes.string,
}

export default Box
