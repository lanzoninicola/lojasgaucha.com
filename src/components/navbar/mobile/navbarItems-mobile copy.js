import * as React from "react"
import styled from "styled-components"

import { ThemeContext } from "styled-components"

import { GridContainer } from "../../../styling/layouts/inner/index"
import NavbarItem from "../../../styling/navbar/item/navbarItem"
import {
  NavLink,
  NavDiv,
  NavModal,
  NavAnchor,
} from "../../../styling/navigation/index"

import NavbarContainerGridStretch from "../../../styling/navbar/components/container/navbarContainerGridStretch"

const NavbarItemsMobileBottom = styled(NavbarContainerGridStretch)`
  position: fixed;
  bottom: 0px;
  z-index: 999;

  background: ${({ theme }) => theme?.navbar?.mobile?.layout?.background};
`

const NavItemsMobile = () => {
  const themeContext = React.useContext(ThemeContext)

  const itemList = themeContext?.navbar?.mobile?.items
  const navItemLayoutConfig = themeContext?.navbar?.mobile?.layout

  return (
    <NavbarItemsMobileBottom
      id="navbarMobileBottom"
      height="70px"
      columns="1fr 1fr 1fr 1fr 1fr"
    >
      {itemList.map((item, index) => {
        // console.log(item)
        const { type, value } = item?.to

        const navbarItem = (
          <NavbarItem
            layoutConfig={navItemLayoutConfig}
            key={index}
            item={item}
          />
        )

        const hoverEffects = navItemLayoutConfig?.effects?.hover

        if (type === "link") {
          return (
            <NavLink
              key={index}
              to={{ type, value }}
              hoverEffects={hoverEffects}
            >
              {navbarItem}
            </NavLink>
          )
        }

        if (type === "modal") {
          return (
            <NavModal
              key={index}
              from="navbar"
              to={{ type, value }}
              renderOption={{ action: "toggle" }}
              hoverEffects={hoverEffects}
            >
              {navbarItem}
            </NavModal>
          )
        }

        if (type === "anchor") {
          return (
            <NavAnchor
              key={index}
              to={{ type, value }}
              hoverEffects={hoverEffects}
            >
              {navbarItem}
            </NavAnchor>
          )
        }

        if (type === "component") {
          return (
            <NavDiv
              key={index}
              to={{ type, value }}
              hoverEffects={hoverEffects}
            >
              {navbarItem}
            </NavDiv>
          )
        }

        return null
      })}
    </NavbarItemsMobileBottom>
  )
}

export default NavItemsMobile
