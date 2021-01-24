import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { FlexContainer, GridContainer } from "../../../../styling/layouts/inner"
import { Title, Text } from "../../../../styling/typography/index"
import { NavDiv, NavModal } from "../../../../styling/navigation/index"

import { ModalCard, ModalCardIcon } from "../../../other/index"

const StyledFaleConoscoInner = styled.div`
  height: 100%;
  width: auto;

  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const FaleConosco = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          whatsAppContacts {
            fullName
            wnumber
          }
        }
      }
    }
  `)

  const officePhone = data.site.siteMetadata?.officePhone
  const whatsAppContacts = data.site.siteMetadata?.whatsAppContacts

  // se i contatti di whatsapp sono più di uno aprire un'altra modal in modalità card
  // per selezionare la persona con cui parlare

  return (
    <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
      <div>
        <Title
          as="h2"
          align="center"
          color="orange"
          weight="400"
          mt={{ min: "15px", max: "30px" }}
        >
          Fale Conosco
        </Title>
        <Text variant="secondary" weight="300" align="center">
          Você precisa de ajuda? Deseja saber a disponibilidade de um produto? O
          qualquer outra coisa que possa ser de ajuda nas sua compras.
        </Text>
      </div>
      <StyledFaleConoscoInner>
        <FlexContainer>
          <Title as="h4" weight="400" color="orange">
            Canais rapido
          </Title>
          <NavDiv to={{ type: "phone", value: `tel:${officePhone}` }}>
            <ModalCard title="TELEFONE">
              <ModalCardIcon name="CALL_PHONE" />
            </ModalCard>
          </NavDiv>
          <NavDiv
            to={{
              type: "whatsapp",
              value: "https://api.whatsapp.com/send?1=pt_BR&phone=46991564002",
            }}
          >
            <ModalCard title="WHATSAPP">
              <ModalCardIcon name="WHATSAPP" />
            </ModalCard>
          </NavDiv>
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
