import * as React from "react"
import PropTypes from "prop-types"
import { PancakeLayout } from "@templates/index"
import { useViewportInfo } from "@hooks"

import Header from "../../../components/header/header"
import BannerNotification from "../../../components/notification/bannerNotification"
import NavbarItemsMobile from "../../../components/navbar/mobile/navbarItems-mobile"

const WebsiteLayout = ({ children }) => {
  const { device } = useViewportInfo()

  return (
    <>
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
    </>
  )
}

WebsiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebsiteLayout
