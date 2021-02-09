import * as React from "react"

import { NavbarContainerFlexAuto, NavbarItems } from "@navbar"

const NavItemsLaptop = () => {
  return (
    <NavbarContainerFlexAuto stretch="16">
      <NavbarItems module="website" device="laptop" />
    </NavbarContainerFlexAuto>
  )
}

export default NavItemsLaptop
