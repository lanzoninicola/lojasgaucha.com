import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import colorsTheme from "@styling/_theme/colorsTheme"

const MapStoreAddress = () => {
  return (
    <FlexContainer columns left>
      <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
        Avenida Tupi, numero 2351
      </Text>
      <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
        Centro, Pato Branco
      </Text>
      <Text variant="secondary" weight="400" color={colorsTheme("orange")}>
        Paraná (PR)
      </Text>
    </FlexContainer>
  )
}

export default MapStoreAddress
