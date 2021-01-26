import * as React from "react"
import PropTypes from "prop-types"

import { FlexContainer } from "@layouts/index"

import NavItemIcon from "./navItemIcon"
import NavItemText from "./navItemText"

import { NavLink, NavDiv, NavModal, NavAnchor } from "@navigation/index"

const NavbarItem = ({ item, hideIcon, hideText, iconColor, textColor }) => {
  const navbarItem = (
    <FlexContainer column centerY centerX h100>
      {!hideIcon && (
        <NavItemIcon
          icon={item.icon}
          color={iconColor}
          spotlighted={item.spotlighted}
        />
      )}
      {!hideText && (
        <NavItemText color={textColor} spotlighted={item.spotlighted}>
          {item.text}
        </NavItemText>
      )}
    </FlexContainer>
  )

  const { type, value } = item?.to

  if (type === "link") {
    return <NavLink to={{ type, value }}>{navbarItem}</NavLink>
  }

  if (type === "modal") {
    return (
      <NavModal
        from="navbar"
        to={{ type, value }}
        renderOption={{ action: "toggle" }}
      >
        {navbarItem}
      </NavModal>
    )
  }

  if (type === "anchor") {
    return <NavAnchor to={{ type, value }}>{navbarItem}</NavAnchor>
  }

  if (type === "component") {
    return <NavDiv to={{ type, value }}>{navbarItem}</NavDiv>
  }

  return null
}

NavbarItem.propTypes = {
  item: (props, propName, componentName) => {
    // icon: "ALERT_TRIANGLE", text: "Porque nós", to: {…}, spotlighted: {…}

    if (!props[propName].hasOwnProperty("icon")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "icon" . 
        
        The "icon" property contains the name of icon (from /iconsTheme.js) to render
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("text")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "text" . 
        
        The "text" property contains the text to render at the bottom of the icon.
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("to")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "to" . 
        
        The "to" property is an object that contains the info for routing {type: "link", value: "/product"}.
        
        `
      )
    }

    if (!props[propName]["to"].hasOwnProperty("type")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "type" . 
        
        The "type" property must be a string and its value could be:
        - link
        - modal
        - anchor
        - component
        
        `
      )
    }

    if (!props[propName]["to"].hasOwnProperty("value")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "value" . 
        
        The "value" property must be a string and its value could be:
        - a link: an internal URL of website (eg. "/product")
        - a React Component for the type "modal" 
        - anchor: an external link (eg. www.google.com)
        - a React Component for the type "component" 
        
        `
      )
    }

    if (!props[propName].hasOwnProperty("spotlighted")) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" must be an object with a property called "spotlighted". 
        
        The "spotlighted" is a string and defines the color of icon and text of nav-item if you want to emphasize.
        
        `
      )
    }
  },
  hideIcon: PropTypes.bool,
  hideText: PropTypes.bool,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default NavbarItem
