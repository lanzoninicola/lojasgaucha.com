import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Title } from "@typography/index"
import { colorsTheme } from "@theme"

const StoreLocationAddress = () => {
  return (
    <FlexContainer columns left>
      <Title as="h5" color={colorsTheme("orange")}>
        Avenida Tupi, numero 2351
      </Title>
      <Title as="h5" color={colorsTheme("orange")}>
        Centro, Pato Branco
      </Title>
      <Title as="h5" color={colorsTheme("orange")}>
        Paraná (PR)
      </Title>
    </FlexContainer>
  )
}

export default StoreLocationAddress
