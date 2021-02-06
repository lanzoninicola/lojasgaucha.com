import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "../../_theme/_global-style"

import { PancakeLayout } from "@templates/index"
import { HeaderFixedContainer } from "@layouts/index"
import { BottomNavbar } from "@navbar/index"
import NavbarItemMobile from "../../../components/navbar/mobile/navbarItem-mobile"

import { useViewportInfo } from "@hooks/index"
import { ModalProvider } from "@overlays/index"

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
            <HeaderFixedContainer />
            {children}
            {/* Footer */}
          </PancakeLayout>
        )}

        {/* layout for screen < 1024px */}
        {device === "mobile" && (
          <PancakeLayout h100v w100v>
            {children}
            <BottomNavbar NavItemComponent={NavbarItemMobile} />
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
