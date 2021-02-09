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
  const { device, height, width } = useViewportInfo("WebsiteLayout")

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
        <PancakeLayout h100v w100v viewportInfo={{ device, height, width }}>
          {(device === "laptop" || device === "tablet") && <Header />}
          <BannerNotification />
          {children}
          {device === "mobile" && <NavbarItemsMobile />}
        </PancakeLayout>
      </ModalProvider>
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
