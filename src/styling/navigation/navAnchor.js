/**
 *  This component used in a navbar let you fired events onClick.
 *  It is different from "NavLink" that will use the "Link" component by Gatsby
 *
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { motion } from "framer-motion"

const StyledNavAnchor = styled(motion.a)`
  &:link {
    text-decoration: none;
  }

  &:visited {
    text-decoration: none;
  }
`

const NavAnchor = ({ to, children }) => {
  const themeContext = React.useContext(ThemeContext)
  const motionHover = themeContext?.navbar?.mobile?.layout?.effects?.motionHover

  return (
    <>
      <StyledNavAnchor
        target="_blank"
        href={to?.value}
        whileHover={{
          scale: 1.2,
          ...motionHover,
        }}
        whileTap={{
          scale: 1.5,
          ...motionHover,
        }}
      >
        {children}
      </StyledNavAnchor>
    </>
  )
}

NavAnchor.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavAnchor
