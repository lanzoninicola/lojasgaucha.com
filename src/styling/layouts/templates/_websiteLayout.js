import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { ThemeProvider } from "styled-components"
import { theme } from "@theme/_global-style"
import { GlobalStyle } from "../../_theme/_global-style"

import { PancakeLayout } from "@templates/index"
import { useViewportInfo } from "@hooks/index"
import { ModalProvider } from "@overlays/index"

import Header from "../../../components/header/header"
import BannerNotification from "../../../components/notification/bannerNotification"
import NavbarItemsMobile from "../../../components/navbar/mobile/navbarItems-mobile"

const WebsiteLayout = ({ children }) => {
  const { device, size, height, width, diagonal } = useViewportInfo(
    "WebsiteLayout"
  )

  // console.log(device, size, height, width, diagonal)

  const nextTheme = {
    ...theme,
    viewport: { device, size, height, width, diagonal },
  }

  return (
    <>
      <ThemeProvider theme={nextTheme}>
        <GlobalStyle />
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
          {(device === "laptop" || device === "tablet") && (
            <PancakeLayout>
              <Header />
              <BannerNotification />
              {children}
            </PancakeLayout>
          )}

          {device === "mobile" && (
            <PancakeLayout h100v w100v>
              <BannerNotification />
              {children}
              <NavbarItemsMobile />
            </PancakeLayout>
          )}
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
