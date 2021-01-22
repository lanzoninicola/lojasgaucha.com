import * as React from "react"
import styled from "styled-components"
import ButtonBase from "./buttonBase"

import useHover from "../_hooks/useHover"

const StyledButtonPrimaryBlue = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => {
    // TODO: MANAGE THE CASE WHEN THE COLOR DOESN'T EXIST FOR THE VARIANT CHOOSED - HERE OR INSIDE THE BUTTON THEME FUNCTION buttonTheme.js
    return theme.button?.primary?.blue?.background.default
  }};

  color: ${({ theme, hovered }) => {
    // TODO: MANAGET HE CASE WHEN THE COLOR DOESN'T EXIST FOR THE VARIANT CHOOSED - HERE OR INSIDE THE BUTTON THEME FUNCTION buttonTheme.js
    return hovered
      ? theme.button?.primary?.blue?.labelColor.onHover
      : theme.button?.primary?.blue?.labelColor.default
  }};
`

const StyledButtonPrimaryOrange = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => {
    // TODO: MANAGE THE CASE WHEN THE COLOR DOESN'T EXIST FOR THE VARIANT CHOOSED - HERE OR INSIDE THE BUTTON THEME FUNCTION buttonTheme.js
    return theme.button?.primary?.orange?.background.default
  }};

  color: ${({ theme, hovered }) => {
    // TODO: MANAGET HE CASE WHEN THE COLOR DOESN'T EXIST FOR THE VARIANT CHOOSED - HERE OR INSIDE THE BUTTON THEME FUNCTION buttonTheme.js
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
