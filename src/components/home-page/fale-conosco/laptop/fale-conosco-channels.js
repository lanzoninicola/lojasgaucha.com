import * as React from "react"

import { GridFixedContainer } from "@layouts"
import FaleConoscoCanaisRapido from "./fale-conosco-canais-rapido"
import FaleConoscoFormWrapper from "../shared/fale-conosco-form-wrapper"

const FaleConoscoChannels = () => {
  return (
    <GridFixedContainer columns="1fr" rows="1fr" gap="40">
      <GridFixedContainer columns=".25fr 1fr .25fr" rows="1fr">
        <div></div>
        <GridFixedContainer
          columns="1fr"
          rows=".5fr .5fr"
          pt={{ laptop: 160, tablet: 80 }}
          pl="80"
          pr="80"
          pb={{ laptop: 160, tablet: 80 }}
          gap="48"
        >
          <FaleConoscoCanaisRapido />
          <FaleConoscoFormWrapper />
        </GridFixedContainer>
        <div></div>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoChannels
