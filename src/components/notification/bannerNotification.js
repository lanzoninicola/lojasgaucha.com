import * as React from "react"

import { GridContainer } from "@layouts/index"

import NotificationStandard from "./notificationStandard"

const BannerNotification = ({ viewportInfo }) => {
  return (
    <GridContainer id="bannerNotification" h="50">
      <NotificationStandard viewportInfo={viewportInfo} />
    </GridContainer>
  )
}

export default BannerNotification
