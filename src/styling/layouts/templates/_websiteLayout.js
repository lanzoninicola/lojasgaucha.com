import * as React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../_theme/_global-style"

import { PancakeLayout, BottomNavbarLayout } from "./index"

import useViewportInfo from "../../_hooks/useViewportInfo"
import ModalProvider from "../../overlays/context/modalProvider"

const WebsiteLayout = ({ children }) => {
  const { height, width } = useViewportInfo()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        {/* layout for screen > 1024px */}
        {width > 1024 && <PancakeLayout>{children}</PancakeLayout>}

        {/* layout for screen < 1024px */}
        {/* {width < 1024 && <BottomNavbarLayout>{children}</BottomNavbarLayout>} */}
        {width < 1024 && (
          <BottomNavbarLayout vh={height} vw={width}>
            {children}
          </BottomNavbarLayout>
        )}
      </ModalProvider>
    </ThemeProvider>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
