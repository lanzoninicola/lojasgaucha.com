import * as React from "react"
import styled from "styled-components"
import colorsTheme from "../../styling/_theme/colorsTheme"

const StyledBox = styled.div`
  padding: ${({ p }) => p ?? `3px 10px 3px 10px`};
  background: ${({ bg }) => {
    return colorsTheme(bg, {
      colorUnit: "rgba",
      opacity: 0.9,
    })
  }};
`

const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Box
