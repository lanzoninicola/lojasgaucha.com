import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "@theme/_global-style"

import { WebsiteLayout } from "../styling/layouts/templates/index"
import DOMViewportInfo from "../styling/layouts/utils/DOMViewportInfo"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <WebsiteLayout>
        <DOMViewportInfo />
        {children}
      </WebsiteLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
