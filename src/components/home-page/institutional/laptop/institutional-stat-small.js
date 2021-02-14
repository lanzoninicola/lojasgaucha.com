import * as React from "react"

import { GridFixedContainer } from "@layouts/index"

import InstitutionalStatTitle from "./institutional-stat-title"
import InstitutionalStatSmallBoxes from "./institutional-stat-small-boxes"

const InstitutionalStatSmall = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX>
        <InstitutionalStatTitle>nós entregamos</InstitutionalStatTitle>
        <InstitutionalStatSmallBoxes />
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalStatSmall
