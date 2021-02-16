import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { colorsTheme } from "@theme"

import FaleConoscoHeader from "./fale-conosco-header"
import FaleConoscoSubHeader from "./fale-conosco-sub-header"

const FaleConoscoContent = () => {
  return (
    <GridFixedContainer columns="1fr" rows="1fr">
      <GridFixedContainer columns=".25fr 1fr .25fr" rows="1fr">
        <div></div>
        <GridFixedContainer
          columns="1fr"
          rows="1fr 1fr"
          bg={colorsTheme("orange")}
          pt="160"
          pl="160"
          pr="160"
          pb="160"
          gap="48"
        >
          <FaleConoscoHeader />
          <FaleConoscoSubHeader />
        </GridFixedContainer>
        <div></div>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoContent
