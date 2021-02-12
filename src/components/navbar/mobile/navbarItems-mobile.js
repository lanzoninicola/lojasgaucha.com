import * as React from "react"
import styled from "styled-components"

import { NavbarContainerGridStretch, NavbarItems } from "@navbar/index"

import NavbarItemMobile from "./navbarItem-mobile"

const StyledNavbarItemsMobile = styled(NavbarContainerGridStretch)`
  z-index: 999;
  background: ${({ theme }) =>
    theme?.navbar?.settings?.layout?.mobile?.background};
  ${({ $style }) => $style ?? {}}
`

const NavbarItemsMobile = ({ children, ...props }) => {
  return (
    <StyledNavbarItemsMobile
      h100
      columns="1fr 1fr 1fr 1fr 1fr"
      pt="4"
      pb="4"
      {...props}
    >
      <NavbarItems
        module="website"
        device="mobile"
        NavItemComponent={props => <NavbarItemMobile {...props} />}
      />
    </StyledNavbarItemsMobile>
  )
}

export default NavbarItemsMobile
