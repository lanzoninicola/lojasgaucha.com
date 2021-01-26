import * as React from "react"
import styled from "styled-components"

import { NavbarContainerGridStretch } from "./container/index"

const StyledBottomGridNavbar = styled(NavbarContainerGridStretch)`
  position: fixed;
  bottom: 0px;
  z-index: 999;

  background: ${({ theme }) => theme?.navbar?.mobile?.layout?.background};

  ${({ $style }) => $style ?? {}}
`

const BottomGridNavbar = ({ columns, h, height, children, ...props }) => {
  return (
    <StyledBottomGridNavbar
      id="StyledBottomGridNavbar"
      height={h ?? height}
      columns={columns}
      {...props}
    >
      {children}
    </StyledBottomGridNavbar>
  )
}

BottomGridNavbar.propTypes = {
  columns: (props, propName, componentName) => {
    if (
      props[propName] === undefined ||
      props[propName] === null ||
      typeof props[propName] !== "string"
    ) {
      return new Error(
        `
            ${componentName} - Prop "${propName}" with type "string" is required.

            This value defines the number of elements inside the navbar.
            
        `
      )
    }
  },
}

export default BottomGridNavbar
