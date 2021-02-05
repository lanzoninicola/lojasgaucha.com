import * as React from "react"
import styled, { ThemeContext } from "styled-components"
import { FlexContainer, GridContainer } from "@layouts/index"
import { Title, Text } from "@typography/index"
import { NavModal, NavAnchor } from "@navigation/index"

import { ModalCard, ModalCardIcon } from "../../../styling/index"

const StyledFaleConoscoInner = styled.div`
  height: 100%;
  width: auto;

  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const FaleConosco = () => {
  const themeContext = React.useContext(ThemeContext)
  const companyInfo = themeContext?.company
  const { officePhone } = companyInfo

  // se i contatti di whatsapp sono più di uno aprire un'altra modal in modalità card
  // per selezionare la persona con cui parlare

  return (
    <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
      <FlexContainer columns left>
        <Title
          as="h2"
          color="orange"
          weight="700"
          mt={{ min: "15px", max: "30px" }}
          mb="8"
        >
          Fale Conosco
        </Title>
        <Text weight="300" color="white">
          Você precisa de ajuda? Deseja saber a disponibilidade de um produto? O
          qualquer outra coisa que possa ser de ajuda nas sua compras.
        </Text>
      </FlexContainer>
      <StyledFaleConoscoInner>
        <FlexContainer>
          <Title as="h4" weight="400" color="orange">
            Canais rapido
          </Title>
          <NavAnchor to={{ type: "phone", value: `tel:${officePhone}` }}>
            <ModalCard title="TELEFONE">
              <ModalCardIcon name="CALL_PHONE" />
            </ModalCard>
          </NavAnchor>
          <NavAnchor
            to={{
              type: "whatsapp",
              value: "https://api.whatsapp.com/send?1=pt_BR&phone=46991564002",
            }}
          >
            <ModalCard title="WHATSAPP">
              <ModalCardIcon name="WHATSAPP" />
            </ModalCard>
          </NavAnchor>
          <Title as="h4" weight="400" color="orange" mt="36px">
            O pode escrever
          </Title>
          <NavModal
            from="faleConosco"
            to={{ type: "modal", value: "ModalFaleConoscoForm" }}
          >
            <ModalCard title="DEIXA UM MENSAGEM">
              <ModalCardIcon name="MAIL" />
            </ModalCard>
          </NavModal>
        </FlexContainer>
      </StyledFaleConoscoInner>
    </GridContainer>
  )
}

export default FaleConosco
