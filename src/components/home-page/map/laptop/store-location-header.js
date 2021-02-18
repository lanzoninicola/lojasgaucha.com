import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { Title, Text } from "@typography"

const StoreLocationHeader = () => {
  return (
    <GridFixedContainer columns="1fr" rows=".25fr 1fr">
      <Title as="h2" color="blue" weight="700">
        Para chegar até nós
      </Title>
      <Text color="blue">
        Olhe, não é muito difícil... Você conhece a praça principal em Pato
        Branco, no centro da cidade? Sim, estamos muito perto disso...
      </Text>
    </GridFixedContainer>
  )
}

export default StoreLocationHeader
