// import { Link } from "gatsby"
import * as React from "react"
import { HeaderFixedContainer } from "../styling/layouts/header/header"
import { FlexContainer } from "../styling/layouts/inner/index"
import Logo from "../styling/logo/index"
import { NavItemsLarge } from "../styling/navbar/index"

import useViewportInfo from "../styling/_hooks/useViewportInfo"

const Header = () => {
  const { width } = useViewportInfo()

  return (
    <HeaderFixedContainer>
      <FlexContainer row stretchXL centerY>
        <Logo device="xlarge" variants="primary" />
        {width > 1024 && <NavItemsLarge />}
      </FlexContainer>
    </HeaderFixedContainer>
  )
}

export default Header
