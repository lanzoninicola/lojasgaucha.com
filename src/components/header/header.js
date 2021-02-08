import * as React from "react"
import { HeaderFixedContainer } from "@layouts/index"
import { FlexContainer } from "@layouts/index"
import { Logo } from "@logo/index"
import NavItemsLaptop from "../navbar/laptop/navbarItems-laptop"
import BannerNotification from "../notification/bannerNotification"

const Header = () => {
  return (
    <HeaderFixedContainer pl="180" pr="180" wFixed>
      <FlexContainer row stretchXL centerY>
        <Logo device="xlarge" variants="primary" />
        <NavItemsLaptop />
      </FlexContainer>
      <BannerNotification />
    </HeaderFixedContainer>
  )
}

export default Header
