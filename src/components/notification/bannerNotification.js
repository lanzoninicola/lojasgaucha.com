import * as React from "react"

import { Strip } from "@layouts/index"

import NotificationStandard from "./notificationStandard"

const BannerNotification = () => {
  return (
    <Strip row centerX id="bannerNotification" height="50">
      <NotificationStandard />
    </Strip>
  )
}

export default BannerNotification
