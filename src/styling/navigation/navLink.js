import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { motion } from "framer-motion"

import { Link } from "gatsby"

/**
 * This component let you navigate through the website page
 * 
 * Props:
 * 
 * to: {
            type: "link",
            value: "/ambientes",
          },
*/

const StyledLink = styled(motion.custom(Link))`
  text-decoration: none;
  cursor: pointer;
`

const NavLink = ({ to, children }) => {
  const themeContext = React.useContext(ThemeContext)
  const motionHover = themeContext?.navbar?.mobile?.layout?.effects?.motionHover

  return (
    <StyledLink
      to={to?.value}
      // whileHover={{
      //   scale: 1.2,
      //   ...motionHover,
      // }}
      // whileTap={{
      //   scale: 1.5,
      //   ...motionHover,
      // }}
    >
      {children}
    </StyledLink>
  )
}

NavLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default NavLink
