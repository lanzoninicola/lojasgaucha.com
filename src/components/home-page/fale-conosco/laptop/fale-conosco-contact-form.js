import * as React from "react"

import { GridFixedContainer, FlexContainer } from "@layouts"
import { Title } from "@typography"

const FaleConoscoContactForm = () => {
  return (
    <GridFixedContainer id="fale-conosco-form" columns="1fr" rAuto>
      <Title as="h5" weight="700" color="orange" uppercase center>
        se você não está com pressa, pode escrever aqui
      </Title>

      <GridFixedContainer columns="1fr 1fr" rAuto>
        <FlexContainer columns>
          {/* <FaleConoscoFormContactInfo />
          <FaleConoscoFormMessage /> */}
        </FlexContainer>
      </GridFixedContainer>
    </GridFixedContainer>
  )
}

export default FaleConoscoContactForm
