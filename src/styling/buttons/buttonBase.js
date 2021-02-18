import { css } from "styled-components"
import * as React from "react"
import styled from "styled-components"
import { Size } from "@layouts"

const StyledButtonBase = styled.button`
  ${Size}
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.typography.secondary.family};
  font-weight: normal;
  font-size: 16px;
  cursor: pointer;
`

const ButtonBase = React.forwardRef(({ children, ...props }, ref) => (
  <StyledButtonBase ref={ref} w="215" h="50" {...props}>
    {children}
  </StyledButtonBase>
))

export default ButtonBase
