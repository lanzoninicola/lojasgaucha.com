import styled from "styled-components"
import { FlexContainer } from "@layouts"

const Header = styled(FlexContainer)`
  height: ${({ vh }) => `${vh}px`};
  width: ${({ vw }) => `${vw}px`};
  padding-left: 16px;
  padding-right: 16px;
`

export default Header

// Disappear (header will shrink at the top after scrolling)

// Fade Out (header will disappear with Fade Out effect)
