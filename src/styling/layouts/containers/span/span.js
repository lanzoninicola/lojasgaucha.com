import * as React from "react"
import styled from "styled-components"

const StyledSpan = styled.span`
  position: relative;
  white-space: ${({ newLine }) => {
    if (newLine) return "pre-wrap"

    return null
  }};
  ${({ $style }) => $style ?? {}}
`

const Span = ({ children, ...props }) => (
  <StyledSpan {...props}>{children}</StyledSpan>
)

export default Span
