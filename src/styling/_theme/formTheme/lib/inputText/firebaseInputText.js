import styled from "styled-components"

import { colorsTheme } from "@theme/index"
import { Space, Size } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"

const FirebaseInputText = styled.input`
  ${Space}
  ${Size}
  font-family: "Poppins", sans-serif;
  font-size: ${() => {
    const fontSize = { mobile: 16, laptop: 16, tablet: 16 }
    return useResponsiveSize(fontSize)
  }};
  line-height: ${() => {
    const fontSize = { mobile: 36, laptop: 36, tablet: 36 }
    return useResponsiveSize(fontSize)
  }};
  text-transform: lowercase;
  color: ${() => colorsTheme("white")};
  background: transparent;
  padding: 0px 4px;
  border: 0;
  border-bottom: ${() => `1px solid ${colorsTheme("orange")}`};
  border-color: ${() => colorsTheme("orange")};
  transition: border 0.15s cubic-bezier(0, 0, 0.2, 1);

  caret-color: ${() =>
    colorsTheme("whitegray", { colorUnit: "rgba", opacity: "0.5" })};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${() => {
      const fontSize = { mobile: 14, laptop: 14, tablet: 14 }
      return useResponsiveSize(fontSize)
    }};
    opacity: 0.3;
  }
`

export default FirebaseInputText
