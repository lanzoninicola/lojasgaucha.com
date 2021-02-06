import * as React from "react"
import styled from "styled-components"

import { NavbarContainerGridStretch, NavbarItems } from "@navbar/index"

// const StyledBottomNavbar = styled(NavbarContainerGridStretch)`
//   position: fixed;
//   bottom: 0px;
//   z-index: 999;
//   background: ${({ theme }) => theme?.navbar?.mobile?.layout?.background};
//   ${({ $style }) => $style ?? {}}
// `

const StyledBottomNavbar = styled(NavbarContainerGridStretch)`
  z-index: 999;
  background: ${({ theme }) => theme?.navbar?.mobile?.layout?.background};
  ${({ $style }) => $style ?? {}}
`

const BottomNavbar = ({ NavItemComponent, children, ...props }) => {
  return (
    <StyledBottomNavbar
      id="StyledBottomNavbar"
      h="70"
      columns="1fr 1fr 1fr 1fr 1fr"
      {...props}
    >
      <NavbarItems
        module="website"
        NavItemComponent={props => <NavItemComponent {...props} />}
      />
    </StyledBottomNavbar>
  )
}

BottomNavbar.propTypes = {
  // columns: (props, propName, componentName) => {
  //   if (
  //     props[propName] === undefined ||
  //     props[propName] === null ||
  //     typeof props[propName] !== "string"
  //   ) {
  //     return new Error(
  //       `
  //           ${componentName} - Prop "${propName}" with type "string" is required.

  //           This value defines the number of elements inside the navbar.

  //       `
  //     )
  //   }
  // },
  NavItemComponent: (props, propName, componentName) => {
    if (
      props[propName] === undefined ||
      props[propName] === null ||
      typeof props[propName] !== "function"
    ) {
      return new Error(
        `
        ${componentName} - Prop "${propName}" with type "React component" is required, that component renders the navbar.
        
        Passing the prop value in the layout page /layout/templates/_websiteLayout.js:  
        
        "<BottomNavbarLayout Navbar={() => <Navbar_ReactComponent/>} ...other props></BottomNavbarLayout>"
        
        `
      )
    }
  },
}

export default BottomNavbar
