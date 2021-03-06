import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Title, Text } from "@typography/index"
import MapStoreAddress from "./map-storeAddress"

const MapHeader = () => {
  return (
    <FlexContainer columns left>
      <>
        <Title
          as="h2"
          color="orange"
          weight="700"
          mt={{ min: "15px", max: "30px" }}
          mb="8"
        >
          Para chegar até nós
        </Title>
        <Text variant="secondary" weight="300" mb="8" color="white">
          Olhe, não é muito difícil... Você conhece a praça principal em Pato
          Branco, no centro da cidade? Sim, estamos muito perto disso...
        </Text>
        <MapStoreAddress />
      </>
    </FlexContainer>
  )
}

export default MapHeader
