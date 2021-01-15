/**
 * BottomNavbarLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import NavItemsMobile from "../../../../navbar/mobile/navbarItems-mobile"

const StyledBottomNavbarLayout = styled.div`
  max-height: ${({ vh }) => `${vh}px`};
  max-width: ${({ vw }) => `${vw}px`};
`

const BottomNavbarLayout = ({ children, ...props }) => {
  return (
    <StyledBottomNavbarLayout {...props}>
      {children}
      <NavItemsMobile />
    </StyledBottomNavbarLayout>
  )
}

BottomNavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BottomNavbarLayout
