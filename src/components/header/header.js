import * as React from "react"
import { HeaderFixedContainer } from "@layouts/index"
import { FlexContainer } from "@layouts/index"
import { Logo } from "@logo/index"
import NavItemsLaptop from "../navbar/laptop/navbarItems-laptop"

const Header = () => {
  return (
    <HeaderFixedContainer
      // p="16 180 0 180"
      pt={{ laptop: 16, tablet: 8 }}
      pl={{ laptop: 180, tablet: 16 }}
      pb={{ laptop: 0, tablet: 0 }}
      pr={{ laptop: 180, tablet: 16 }}
    >
      <FlexContainer row stretchXL centerY>
        <Logo device="xlarge" variants="primary" />
        <NavItemsLaptop />
      </FlexContainer>
    </HeaderFixedContainer>
  )
}

export default Header
