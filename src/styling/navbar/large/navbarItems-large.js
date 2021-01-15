import * as React from "react"
import { useContext } from "react"

import { ThemeContext } from "styled-components"

import NavbarContainer from "../NavbarContainer"
import NavbarItem from "../navbarItem"
import { NavLink } from "../../navigation/index"

import useResponsiveSize from "../../_hooks/useResponsiveSize"

const NavItemsLarge = () => {
  const themeContext = useContext(ThemeContext)

  const itemList = themeContext.navbar.large.items
  const layoutConfig = themeContext.navbar.large.layout

  const navWidth = useResponsiveSize({
    min: layoutConfig.width.min,
    max: layoutConfig.width.max,
  })

  return (
    <NavbarContainer width={navWidth}>
      {itemList.map((item, index) => {
        return (
          <NavLink key={index} to={item.to}>
            <NavbarItem item={item} layoutConfig={layoutConfig} />
          </NavLink>
        )
      })}
    </NavbarContainer>
  )
}

export default NavItemsLarge
