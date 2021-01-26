import * as React from "react"
import PropTypes from "prop-types"
import { GridContainer } from "../../layouts/inner/index"

/**
 *    Unlike the "navbarContainerFlexStretch" component
 *    this let you more controls of space between the children elements
 */

const NavbarContainerGridStretch = ({
  children,
  w,
  width,
  w100,
  w100v,
  wAuto,
  h,
  height,
  columns,
  ...props
}) => {
  let nextComponentProps = { ...props }

  if (w) delete nextComponentProps["w"]
  if (width) delete nextComponentProps["width"]
  if (w100) delete nextComponentProps["w100"]
  if (w100v) delete nextComponentProps["w100v"]
  if (wAuto) delete nextComponentProps["wAuto"]

  return (
    <GridContainer
      as="nav"
      w100
      h={h ?? height}
      columns={columns}
      {...nextComponentProps}
    >
      {children}
    </GridContainer>
  )
}

NavbarContainerGridStretch.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string.isRequired,
  w: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  width: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  w100: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  w100v: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  wAuto: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.
        
        `
      )
    }
  },
  wAuto: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. 
        
        Per default this component takes the 100% of the containing block. 
        
        You can pass only the "height" size.`
      )
    }
  },
  h: (props, propName, componentName) => {
    if (
      (props[propName] === undefined || props[propName] === null) &&
      !props["height"]
    ) {
      console.error(
        `${componentName} - The "${propName}" prop value is missing. 
        
        You must define a value for the height of the element`
      )
    }
  },
  height: (props, propName, componentName) => {
    if (
      (props[propName] === undefined || props[propName] === null) &&
      !props["h"]
    ) {
      console.error(
        `${componentName} - The "${propName}" prop value is missing. 
        
        You must define a value for the height of the element`
      )
    }
  },
}

export default NavbarContainerGridStretch
