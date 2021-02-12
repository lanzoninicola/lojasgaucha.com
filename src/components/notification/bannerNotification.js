import * as React from "react"

import { GridFluidContainer } from "@layouts/index"

import NotificationStandard from "./notificationStandard"

const BannerNotification = () => {
  return (
    <GridFluidContainer id="bannerNotification" h="50">
      <NotificationStandard />
    </GridFluidContainer>
  )
}

export default BannerNotification
