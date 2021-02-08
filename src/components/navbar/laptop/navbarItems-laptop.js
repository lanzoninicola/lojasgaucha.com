import * as React from "react"
import { ThemeContext } from "styled-components"

import { NavbarContainerFlexAuto, NavbarItems } from "@navbar"
import { useResponsiveSize } from "@hooks"

const NavItemsLaptop = () => {
  const themeContext = React.useContext(ThemeContext)
  const settings = themeContext?.navbar?.settings

  const layoutConfig = settings?.laptop?.layout

  return (
    <NavbarContainerFlexAuto stretch="16">
      <NavbarItems module="website" device="laptop" />
    </NavbarContainerFlexAuto>
  )
}

export default NavItemsLaptop
