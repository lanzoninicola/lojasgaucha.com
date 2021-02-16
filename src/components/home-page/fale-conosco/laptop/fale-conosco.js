import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts"
import FaleConoscoContent from "./fale-conosco-content"
import FaleConoscoContactChannels from "./fale-conosco-contact-channels"

const FaleConosco = () => {
  return (
    <GridFixedContainer
      as="section"
      columns="1fr"
      rows="1fr"
      gap="0"
      mt="36"
      mb="36"
    >
      <GridFluidContainer>
        <FaleConoscoContent />
        <FaleConoscoContactChannels />
      </GridFluidContainer>
    </GridFixedContainer>
  )
}

export default FaleConosco
