import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import useHover from "../_hooks/useHover"

const ButtonBase = styled.button`
  width: 215px;
  height: 50px;
  border: none;
  border-radius: 50px;
  background: ${({ theme, variant, color }) =>
    theme.button[variant][color].background.default};

  color: ${({ theme, variant, color, hovered }) =>
    hovered
      ? theme.button[variant][color].labelColor.onHover
      : theme.button[variant][color].labelColor.default};
  font-family: ${({ theme }) => theme.typography.secondary.family};
  font-weight: normal;
  font-size: 16px;
`

export const Button = ({ variant, color, children }) => {
  const [ref, hoveredStatus] = useHover()

  return (
    <ButtonBase
      ref={ref}
      variant={variant}
      color={color}
      hovered={hoveredStatus}
    >
      {children}
    </ButtonBase>
  )
}

Button.defaultProps = {
  variant: "primary",
  color: "blue",
}

Button.propTypes = {
  color: PropTypes.string,
}
