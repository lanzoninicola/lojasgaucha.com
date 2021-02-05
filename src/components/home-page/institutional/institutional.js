import * as React from "react"

import { GridContainer } from "@layouts/index"

import InstitutionalHeader from "./institutional-headline"
import InstitutionalServices from "./institutional-services"
import InstitutionalStats from "./institutional-stats"

const Institutional = () => {
  return (
    <>
      <GridContainer rAuto gap="8" stretchX>
        <InstitutionalHeader />
        <InstitutionalStats />
      </GridContainer>
      <InstitutionalServices />
    </>
  )
}

export default Institutional
