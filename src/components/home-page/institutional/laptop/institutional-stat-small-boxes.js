import * as React from "react"
import { GridFixedContainer } from "@layouts/index"

import InstitutionalStatSmallBox from "./institutional-stat-small-box"

const InstitutionalStatSmallBoxes = () => {
  return (
    <>
      <GridFixedContainer rows="1fr 1fr 1fr" columns="1fr" gap="16">
        <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
          <InstitutionalStatSmallBox number="180" text="cozinhas" />
          <InstitutionalStatSmallBox number="215" text="mesas" />
        </GridFixedContainer>
        <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
          <InstitutionalStatSmallBox number="329" text="camas" />
          <InstitutionalStatSmallBox number="169" text="colchões" />
        </GridFixedContainer>
        <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="16">
          <InstitutionalStatSmallBox number="430" text="sofà" />
          <InstitutionalStatSmallBox number="198" text="comodas" />
        </GridFixedContainer>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalStatSmallBoxes
