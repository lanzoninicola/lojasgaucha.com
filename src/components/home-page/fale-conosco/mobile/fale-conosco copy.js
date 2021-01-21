import * as React from "react"
import styled from "styled-components"

import { PancakeStack, FlexContainer } from "../../../styling/layouts"
import { Title, Text, SmallText } from "../../../styling/typography/index"
import { NavDiv } from "../../../styling/navigation/index"
import SVGIcon from "../../../styling/icons/SVGIcon"
import colorsTheme from "../../../styling/_theme/colorsTheme"

import { ModalCard, ModalCardIcon } from "../../other/index"

const StyledFaleConoscoInner = styled.div`
  height: 100%;
  width: auto;

  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const FaleConosco = () => {
  return (
    <>
      <PancakeStack gap="20px" ml="16px" mr="16px" stretchX>
        <Title as="h2" align="center" color="orange" weight="400" mt="30px">
          Fale Conosco
        </Title>
        <Text
          variant="secondary"
          weight="400"
          align="center"
          pl="16px"
          pr="16px"
        >
          Você precisa de ajuda? Deseja saber a disponibilidade? O qualquer
          outra coisa que possa ser de ajuda nas sua compras.
        </Text>
        <StyledFaleConoscoInner>
          <FlexContainer>
            <Title as="h4" weight="400" color="whitegray">
              Canais rapido
            </Title>
            <NavDiv to={{ type: "phone", value: "tel:46991564002" }}>
              <ModalCard title="TELEFONE">
                <ModalCardIcon name="CALL_PHONE" />
              </ModalCard>
            </NavDiv>
            <NavDiv
              to={{
                type: "whatsapp",
                value:
                  "https://api.whatsapp.com/send?1=pt_BR&phone=46991564002",
              }}
            >
              <ModalCard title="WHATSAPP">
                <ModalCardIcon name="WHATSAPP" />
              </ModalCard>
            </NavDiv>
            <Title as="h4" weight="400" color="whitegray" mt="36px">
              O pode escrever
            </Title>
            <NavDiv to={{ type: "phone", value: "tel:46991564002" }}>
              <ModalCard title="DEIXA UM MENSAGEM">
                <ModalCardIcon name="MAIL" />
              </ModalCard>
            </NavDiv>
          </FlexContainer>
        </StyledFaleConoscoInner>
        <FlexContainer centerX centerY>
          <SVGIcon name="CIRCLE_X" size="24" color={colorsTheme("orange")} />
          <SmallText weight="600" color="orange" mt="4px">
            voltar
          </SmallText>
        </FlexContainer>
      </PancakeStack>
    </>
  )
}

export default FaleConosco
