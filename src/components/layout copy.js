/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styling/_theme/_global-style"

import Header from "./header"
import { PancakeStack } from "../styling/layouts/inner/index"

import useViewportInfo from "../styling/_hooks/useViewportInfo"
import { NavItemsMobile } from "../styling/navbar/index"
import ModalProvider from "../styling/overlays/context/ModalProvider"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const { width } = useViewportInfo()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        {/* layout for screen > 1024px */}
        {width > 1024 && (
          <PancakeStack>
            {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
            {/* Banner for Promotional Messages */}
            {children}
            {/* Footer */}
          </PancakeStack>
        )}

        {/* layout for screen < 1024px */}
        {width < 1024 && (
          <>
            {/* Banner for Promotional Messages */}
            {children}
            <NavItemsMobile />
          </>
        )}
      </ModalProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
