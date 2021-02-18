import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { Title } from "@typography"

const FaleConoscoHeader = () => {
  return (
    <GridFixedContainer columns="1fr" rAuto>
      <Title as="h2" color="blue" weight="700">
        Fale conosco
      </Title>
      <Title as="h3" color="white">
        Você precisa de ajuda? Deseja saber a disponibilidade dos produtos? O
        qualquer outra coisa que possa ser de ajuda nas sua compras.
      </Title>
    </GridFixedContainer>
  )
}

export default FaleConoscoHeader
