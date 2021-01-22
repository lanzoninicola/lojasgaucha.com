import { css } from "styled-components"

const ButtonBase = css`
  width: 215px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.typography.secondary.family};
  font-weight: normal;
  font-size: 16px;
`

export default ButtonBase
