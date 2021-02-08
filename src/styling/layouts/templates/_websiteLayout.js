import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "../../_theme/_global-style"

import { PancakeLayout } from "@templates/index"
import { useViewportInfo } from "@hooks/index"
import { ModalProvider } from "@overlays/index"

import Header from "../../../components/header/header"
import BannerNotification from "../../../components/notification/bannerNotification"
import NavbarItemsMobile from "../../../components/navbar/mobile/navbarItems-mobile"

const WebsiteLayout = ({ children }) => {
  const { device } = useViewportInfo()

  return (
    <>
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
        {/* layout for screen > 1024px */}
        {device === "laptop" && (
          <PancakeLayout>
            <Header />
            {children}
            {/* Footer */}
          </PancakeLayout>
        )}

        {/* layout for screen < 1024px */}
        {device === "mobile" && (
          <PancakeLayout h100v w100v>
            <BannerNotification />
            {children}
            <NavbarItemsMobile />
          </PancakeLayout>
        )}
      </ModalProvider>
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
