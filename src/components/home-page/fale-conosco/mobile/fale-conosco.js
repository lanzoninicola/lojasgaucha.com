import * as React from "react"
import styled from "styled-components"
import { FlexContainer, GridFixedContainer } from "@layouts/index"
import { Title, Text } from "@typography/index"

import FaleConoscoContactCanaisRapido from "../mobile/fale-conosco-contact-canais-rapido"

const StyledFaleConoscoInner = styled.div`
  height: 100%;
  width: auto;

  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const FaleConosco = () => {
  // se i contatti di whatsapp sono più di uno aprire un'altra modal in modalità card
  // per selezionare la persona con cui parlare

  return (
    <GridFixedContainer rows=".25fr 1fr" gap="16" stretchX h100>
      <FlexContainer columns left>
        <Title as="h2" color="orange" weight="700" mt="16" mb="8">
          Fale Conosco
        </Title>
        <Text weight="300" color="white">
          Você precisa de ajuda? Deseja saber a disponibilidade de um produto? O
          qualquer outra coisa que possa ser de ajuda nas sua compras.
        </Text>
      </FlexContainer>
      <StyledFaleConoscoInner>
        <FaleConoscoContactCanaisRapido />
      </StyledFaleConoscoInner>
    </GridFixedContainer>
  )
}

export default FaleConosco
