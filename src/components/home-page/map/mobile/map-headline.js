import * as React from "react"
import { FlexContainer } from "../../../../styling/layouts/inner"
import { Title, Text } from "../../../../styling/typography/index"
import colorsTheme from "../../../../styling/_theme/colorsTheme"

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
        <Text variant="secondary" weight="300" mb="8">
          Olhe, não é muito difícil... Você conhece a praça principal em Pato
          Branco, no centro da cidade? Sim, estamos muito perto disso...
        </Text>
        <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
          Avenida Tupi, numero 2351
        </Text>
        <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
          Centro, Pato Branco
        </Text>
        <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
          Paraná (PR)
        </Text>
      </>
    </FlexContainer>
  )
}

export default MapHeader
