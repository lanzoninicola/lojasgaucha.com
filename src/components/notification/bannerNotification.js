import * as React from "react"

import { GridContainer } from "@layouts/index"

import NotificationStandard from "./notificationStandard"

const BannerNotification = () => {
  return (
    <GridContainer id="bannerNotification" h="50">
      <NotificationStandard />
    </GridContainer>
  )
}

export default BannerNotification
