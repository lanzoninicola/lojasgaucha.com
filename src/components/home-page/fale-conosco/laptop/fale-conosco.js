import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts"
import FaleConoscoContent from "./fale-conosco-content"
import FaleConoscoChannels from "./fale-conosco-channels"

const FaleConosco = () => {
  return (
    <GridFixedContainer as="section" columns="1fr" rows="1fr" gap="0">
      <GridFluidContainer gap="0">
        <FaleConoscoContent />
        <FaleConoscoChannels />
      </GridFluidContainer>
    </GridFixedContainer>
  )
}

export default FaleConosco
