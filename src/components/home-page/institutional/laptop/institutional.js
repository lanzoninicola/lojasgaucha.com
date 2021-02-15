import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts/index"
import { colorsTheme } from "@theme"
import { Title } from "@typography"
import { HighlightTextLine1 } from "@decorative"

import InstitutionalStatSmall from "./institutional-stat-small"
import InstitutionalStatBig from "./institutional-stat-big"
import InstitutionalFamilias from "./institutiona-familias"
import InstitutionalCta from "./institutional-cta"

const Institutional = () => {
  return (
    <>
      <GridFixedContainer
        as="section"
        columns="1fr"
        rAuto
        bg={colorsTheme("orange")}
        pl="88"
        pr="88"
        pt="96"
        pb="96"
        gap="72"
      >
        <GridFluidContainer>
          <GridFluidContainer>
            <InstitutionalStatBig />
            <InstitutionalStatSmall />
          </GridFluidContainer>
        </GridFluidContainer>
        <InstitutionalFamilias />

        <Title as="h3" weight="600" size={{ laptop: 56 }} color="white" center>
          porque de móveis,
          <HighlightTextLine1 bg={colorsTheme("blue")} h="90%">
            nos entendemos!
          </HighlightTextLine1>
        </Title>

        <InstitutionalCta />
      </GridFixedContainer>
    </>
  )
}

export default Institutional
