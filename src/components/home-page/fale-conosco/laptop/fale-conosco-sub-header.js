import * as React from "react"

import { GridFixedContainer } from "@layouts"
import { Title, Text } from "@typography"
import { SVGIcon } from "@icons"

const FaleConoscoSubHeader = () => {
  return (
    <GridFixedContainer columns=".75fr" rAuto>
      <GridFixedContainer columns="1fr .1fr" rAuto>
        <Title as="h5" color="blue" weight="700" uppercase>
          Use nossos canais para entrar em contato conosco
        </Title>
        <SVGIcon name="ARROW_RIGHT" size="24" color="white" />
      </GridFixedContainer>
      <Text color="blue">
        Faremos tudo o que pudermos para voltar até você com a esperança de que
        possamos ajudar
      </Text>
    </GridFixedContainer>
  )
}

export default FaleConoscoSubHeader
