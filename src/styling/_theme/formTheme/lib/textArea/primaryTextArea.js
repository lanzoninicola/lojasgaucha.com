import styled from "styled-components"

import { colorsTheme } from "@theme/index"
import { Space, Size } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"

const PrimaryTextArea = styled.textarea`
  ${Space}
  ${Size}
  font-family: ${({ theme }) => {
    const themeTypography = theme?.typography
    const fontFamily = themeTypography?.secondary?.family

    return fontFamily
  }};
  font-size: ${({ theme }) => {
    const themeTypography = theme?.typography
    const fontSize = themeTypography?.secondary?.body?.fontSize
    return useResponsiveSize(fontSize)
  }};
  line-height: ${() => {
    const lineHeight = "36"
    return useResponsiveSize(lineHeight)
  }};
  padding: 0px 4px;
  color: ${() => colorsTheme("blue")};
  border: 0;
  border-bottom: ${() => `3px solid ${colorsTheme("orange")}`};
  background: transparent;
  border-color: ${() => colorsTheme("blue")};
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => {
      const themeTypography = theme?.typography
      const fontSize = themeTypography?.secondary?.body?.fontSize

      return useResponsiveSize(fontSize)
    }};
    opacity: 0.3;
  }
`

export default PrimaryTextArea
