import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import { error } from "@utils/index"
import NavbarItem from "../item/navbarItem"

const NavbarItems = ({ module, NavItemComponent }) => {
  const themeContext = React.useContext(ThemeContext)
  if (themeContext?.navbar === undefined) {
    error(
      `NavbarItems - The styled-components Theme for the "navbar" module is missing`
    )
    return
  }

  const itemList = themeContext?.navbar?.navItems[module]
  if (itemList.length === 0 || itemList === undefined) {
    error(
      `NavbarItems - No navitems was found for the requested module ${module}.`
    )
    return
  }

  return itemList.map((item, index) => {
    if (NavItemComponent !== undefined) {
      return <NavItemComponent key={index} item={item} />
    }

    return <NavbarItem key={index} item={item} />
  })
}

NavbarItems.propTypes = {
  module: PropTypes.string.isRequired,
  NavItemComponent: (props, propName, componentName) => {
    // if (props[propName] === undefined || props[propName] === null) {
    //   return new Error(
    //     `
    //     ${componentName} - Prop "${propName}" is required with type: "React component" that renders the "NavItem".`
    //   )
    // }

    if (typeof props[propName] !== "function") {
      return new Error(
        `
        ${componentName} - The "${propName}" prop must be a React component.`
      )
    }
  },
}

export default NavbarItems
