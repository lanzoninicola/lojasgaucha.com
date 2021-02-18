import styled from "styled-components"

import { colorsTheme } from "@theme/index"
import { Space, Size } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"

const PrimaryInputText = styled.input`
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
    const lineHeight = "45"
    return useResponsiveSize(lineHeight)
  }};
  text-transform: lowercase;
  color: ${() => colorsTheme("blue")};
  background: transparent;
  padding: 0px 4px;
  border: 0;
  border-bottom: ${() => `3px solid ${colorsTheme("blue")}`};
  border-color: ${() => colorsTheme("blue")};
  transition: border 0.15s cubic-bezier(0, 0, 0.2, 1);

  caret-color: ${() =>
    colorsTheme("orange", { colorUnit: "rgba", opacity: "0.5" })};

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

export default PrimaryInputText
