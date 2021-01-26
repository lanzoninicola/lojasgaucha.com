/**
 * BottomNavbarLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledBottomNavbarLayout = styled.div`
  max-height: ${({ vh }) => `${vh}px`};
  max-width: ${({ vw }) => `${vw}px`};
`

const BottomNavbarLayout = ({ children, Navbar, ...props }) => {
  return (
    <StyledBottomNavbarLayout {...props}>
      {children}
      <Navbar />
    </StyledBottomNavbarLayout>
  )
}

BottomNavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  Navbar: (props, propName, componentName) => {
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

export default BottomNavbarLayout
