import * as React from "react"

import { GridFixedContainer } from "@layouts"
import FaleConoscoContactCanaisRapido from "./fale-conosco-contact-canais-rapido"
import FaleConoscoContactForm from "./fale-conosco-contact-form"

const FaleConoscoContactChannels = () => {
  return (
    <GridFixedContainer columns="1fr" rows="1fr">
      <GridFixedContainer columns=".25fr 1fr .25fr" rows="1fr">
        <div></div>
        <GridFixedContainer
          columns="1fr"
          rAuto
          pt="160"
          pl="80"
          pr="80"
          pb="160"
          gap="48"
        >
          <FaleConoscoContactCanaisRapido />
          <FaleConoscoContactForm />
        </GridFixedContainer>
        <div></div>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoContactChannels
