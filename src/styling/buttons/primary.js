import * as React from "react"
import styled from "styled-components"
import ButtonBase from "./buttonBase"

import useHover from "../_hooks/useHover"

// TODO: make naming more generic
// TODO: build a sort of state style (default, hover, onClick, focus) for button template
const StyledButtonPrimaryBlue = styled(ButtonBase)`
  background: ${({ theme }) => {
    return theme.button?.primary?.blue?.background.default
  }};

  color: ${({ theme, hovered }) => {
    return hovered
      ? theme.button?.primary?.blue?.labelColor.onHover
      : theme.button?.primary?.blue?.labelColor.default
  }};
`

const StyledButtonPrimaryOrange = styled(ButtonBase)`
  background: ${({ theme }) => {
    return theme.button?.primary?.orange?.background.default
  }};

  color: ${({ theme, hovered }) => {
    return hovered
      ? theme.button?.primary?.orange?.labelColor.onHover
      : theme.button?.primary?.orange?.labelColor.default
  }};
`

export const ButtonPrimaryOrange = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledButtonPrimaryOrange ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledButtonPrimaryOrange>
  )
}

export const ButtonPrimaryBlue = ({ children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <StyledButtonPrimaryBlue ref={ref} hovered={hoveredStatus}>
      {children}
    </StyledButtonPrimaryBlue>
  )
}
