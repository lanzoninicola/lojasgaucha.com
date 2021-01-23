/**
 *  This component let you open a modal
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { motion } from "framer-motion"

import ModalConsumer from "../overlays/context/modalConsumer"

const StyledNavModal = styled(motion.div)`
  cursor: pointer;
`
const NavModal = ({ to, children, ...props }) => {
  const themeContext = React.useContext(ThemeContext)
  const framerMotion =
    themeContext?.navbar?.mobile?.layout?.effects?.framerMotion

  return (
    <>
      <ModalConsumer modal={to?.value} action="toggle">
        <StyledNavModal
          variants={framerMotion}
          whileHover="hover"
          whileTap="tap"
          {...props}
        >
          {children}
        </StyledNavModal>
      </ModalConsumer>
    </>
  )
}

NavModal.propTypes = {
  children: PropTypes.node.isRequired,
  to: (props, propName, componentName) => {
    const toObject = props[propName]

    if (toObject === undefined) {
      return new Error(
        `
        
        ${componentName} component expects the "to" object as prop. The object must have two properties: 

        --> to: {type?:<string>|"modal", value?:<string>|<a modal name component>}. 

        eg. {{ type: "modal", value: "ModalFaleConoscoForm" }}
        
        `
      )
    }

    if (!toObject.hasOwnProperty("type") || toObject["type"] !== "modal") {
      return new Error(
        `
        
        ${componentName} component expects the "to" object as prop. The object must have two properties: 

        --> to: {type?:<string>|"modal", value?:<string>|<a modal name component>}. 

        The value of "type" prop must be "modal"
        
        `
      )
    }

    if (!toObject.hasOwnProperty("value") || toObject["value"] === "") {
      return new Error(
        `
        
        ${componentName} component expects the "to" object as prop. The object must have two properties: 

        --> to: {type?:<string>|"modal", value?:<string>|<a modal name component>}. 

        The value of "value" prop must be the name of modal to render stored in the catalog ("overlayTheme" object)
        
        `
      )
    }
  },
}

export default NavModal
