import styled from "styled-components"
import { FlexContainer } from "../inner/index"
// import useResponsiveSize from "../../_hooks/useResponsiveSize"

const Header = styled(FlexContainer)`
  height: ${({ vh }) => `${vh}px`};
  width: ${({ vw }) => `${vw}px`};
  padding-left: 16px;
  padding-right: 16px;
`

// Keep the site header visible when a visitor scrolls the page.
export const HeaderFixedContainer = styled(Header)`
  position: fixed;
  z-index: 999;
  ${props => props.$style ?? {}}
`
// Scroll with the site
export const HeaderScrollContainer = styled(Header)``

// Disappear (header will shrink at the top after scrolling)

// Fade Out (header will disappear with Fade Out effect)
