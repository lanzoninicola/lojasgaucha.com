import * as React from "react"

const NavbarItems = ({ items, NavItemComponent }) => {
  return items.map((item, index) => {
    return <NavItemComponent key={index} item={item} />
  })
}

NavbarItems.propTypes = {
  items: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === null) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" with type "array" is required. 
        
        It's an array of object that represents each element of the navbar
        
        `
      )
    }

    if (!Array.isArray(props[propName])) {
      return new Error(
        `
        ${componentName} - The "${propName}" prop must be an array of elements to render.`
      )
    }
  },
  NavItemComponent: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === null) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" is required with type: "React component" that renders the "NavItem".`
      )
    }

    if (typeof props[propName] !== "function") {
      return new Error(
        `
        ${componentName} - The "${propName}" prop must be a React component.`
      )
    }
  },
}

export default NavbarItems
