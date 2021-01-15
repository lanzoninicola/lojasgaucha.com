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
  to: PropTypes.object.isRequired,
}

export default NavModal
