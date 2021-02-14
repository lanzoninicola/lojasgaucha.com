import * as React from "react"
import { GridFixedContainer } from "@layouts/index"

import InstitutionalHeader from "./institutional-headline"
import Services from "../../services/mobile/services"
import InstitutionalStats from "./institutional-stats"

const Institutional = () => {
  return (
    <>
      <GridFixedContainer rAuto gap="8" stretchX>
        <InstitutionalHeader />
        <InstitutionalStats />
      </GridFixedContainer>
      <Services />
    </>
  )
}

export default Institutional
