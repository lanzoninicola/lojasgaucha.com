import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { colorsTheme } from "@theme"

import FaleConoscoHeader from "./fale-conosco-header"
import FaleConoscoSubHeader from "./fale-conosco-sub-header"

const FaleConoscoContent = () => {
  return (
    <GridFixedContainer columns="1fr" rows="1fr">
      <GridFixedContainer
        columns="1fr"
        rows=".5fr .5fr"
        bg={colorsTheme("orange")}
        pt={{ laptop: 160, tablet: 80 }}
        pl={{ laptop: 160, tablet: 80 }}
        pr={{ laptop: 160, tablet: 80 }}
        pb={{ laptop: 160, tablet: 80 }}
        gap="48"
      >
        <FaleConoscoHeader />
        <FaleConoscoSubHeader />
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoContent
