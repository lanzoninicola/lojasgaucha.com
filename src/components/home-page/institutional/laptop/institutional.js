import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts/index"
import { colorsTheme } from "@theme"

import InstitutionalStatSmall from "./institutional-stat-small"
import InstitutionalStatBig from "./institutional-stat-big"
import InstitutionalFamilias from "./institutiona-familias"
import InstitutionalCta from "./institutional-cta"

const Institutional = () => {
  return (
    <>
      <GridFixedContainer
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
        <InstitutionalCta />
      </GridFixedContainer>
    </>
  )
}

export default Institutional
