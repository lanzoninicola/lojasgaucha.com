import * as React from "react"
import { ThemeContext } from "styled-components"

import NavbarItem from "../item/navbarItem"
import { NavLink, NavDiv, NavModal, NavAnchor } from "../../navigation/index"

const NavbarItems = ({ items, hoverEffect }) => {
  const themeContext = React.useContext(ThemeContext)

  const navItemLayoutConfig = themeContext?.navbar?.mobile?.layout

  return (
    <>
      {items.map((item, index) => {
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
    </>
  )
}

export default NavbarItems
