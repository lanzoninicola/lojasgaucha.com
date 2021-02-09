import * as React from "react"
import { HeaderFixedContainer } from "@layouts/index"
import { FlexContainer } from "@layouts/index"
import { Logo } from "@logo/index"
import NavItemsLaptop from "../navbar/laptop/navbarItems-laptop"

const Header = () => {
  return (
    <HeaderFixedContainer p="16 180 0 180">
      <FlexContainer row stretchXL centerY>
        <Logo device="xlarge" variants="primary" />
        <NavItemsLaptop />
      </FlexContainer>
    </HeaderFixedContainer>
  )
}

export default Header
