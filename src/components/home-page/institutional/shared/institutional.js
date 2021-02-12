import * as React from "react"
import { GridFixedContainer } from "@layouts/index"

import InstitutionalHeader from "../mobile/institutional-headline"
import InstitutionalServices from "../mobile/institutional-services"
import InstitutionalStats from "../mobile/institutional-stats"

const Institutional = () => {
  return (
    <>
      <GridFixedContainer rAuto gap="8" stretchX>
        <InstitutionalHeader />
        <InstitutionalStats />
      </GridFixedContainer>
      <InstitutionalServices />
    </>
  )
}

export default Institutional
