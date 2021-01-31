import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../_theme/_global-style"

import { PancakeLayout, BottomNavbarLayout } from "./index"

import useViewportInfo from "../../_hooks/useViewportInfo"
import ModalProvider from "../../overlays/context/modalProvider"
import NavbarMobile from "../../../components/navbar/mobile/navbar-mobile"

const WebsiteLayout = ({ children }) => {
  const { height, width } = useViewportInfo()

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <Helmet>
        {/* https://leafletjs.com/examples/quick-start/ */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Helmet>
      <ModalProvider>
        {/* layout for screen > 1024px */}
        {width > 1024 && <PancakeLayout>{children}</PancakeLayout>}

        {/* layout for screen < 1024px */}
        {/* {width < 1024 && <BottomNavbarLayout>{children}</BottomNavbarLayout>} */}
        {width < 1024 && (
          <BottomNavbarLayout
            vh={height}
            vw={width}
            Navbar={() => <NavbarMobile />}
          >
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
