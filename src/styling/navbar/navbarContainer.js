import * as React from "react"
import PropTypes from "prop-types"
import { FlexContainer } from "../layouts/inner"

const NavbarContainer = ({ children, width, ...props }) => {
  return (
    <FlexContainer as="nav" row stretchXM centerY width={width}>
      {children}
    </FlexContainer>
  )
}

NavbarContainer.propTypes = {
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default NavbarContainer
