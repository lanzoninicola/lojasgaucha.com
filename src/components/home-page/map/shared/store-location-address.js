import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { colorsTheme } from "@theme"

const StoreLocationAddress = () => {
  return (
    <FlexContainer columns left>
      <Text weight="400" color={colorsTheme("orange")}>
        Avenida Tupi, numero 2351
      </Text>
      <Text weight="400" color={colorsTheme("orange")}>
        Centro, Pato Branco
      </Text>
      <Text weight="400" color={colorsTheme("orange")}>
        Paraná (PR)
      </Text>
    </FlexContainer>
  )
}

export default StoreLocationAddress
