import * as React from "react"

import { GridFixedContainer } from "@layouts/index"

import InstitutionalTitles from "./institutional-titles"
import InstitutionalStatSmallBoxes from "./institutional-stat-small-boxes"

const InstitutionalStatSmall = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX>
        <InstitutionalTitles>nós entregamos</InstitutionalTitles>
        <InstitutionalStatSmallBoxes />
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalStatSmall
