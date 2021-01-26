import * as React from "react"
import PropTypes from "prop-types"
import { FlexContainer } from "../../layouts/inner/index"

const NavbarContainerFlexAuto = ({
  children,
  w,
  width,
  h,
  height,
  ...props
}) => {
  return (
    <FlexContainer
      as="nav"
      row
      stretchXM
      centerY
      centerX
      wAuto
      hAuto
      {...props}
    >
      {children}
    </FlexContainer>
  )
}

NavbarContainerFlexAuto.propTypes = {
  children: PropTypes.node.isRequired,
  w: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
    }
  },
  width: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
    }
  },
  h: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
    }
  },
  height: (props, propName, componentName) => {
    if (props[propName]) {
      console.error(
        `${componentName} - A "${propName}" value has been passed as props. This component is made for auto-resizing (w: auto, h: auto) based on size of children elements`
      )
    }
  },
}

export default NavbarContainerFlexAuto
