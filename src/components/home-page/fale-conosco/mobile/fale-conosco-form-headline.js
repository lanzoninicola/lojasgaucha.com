import * as React from "react"
import { FlexContainer } from "../../../../styling/layouts/inner"
import { Title, Text } from "../../../../styling/typography/index"

const FaleConoscoFormHeader = ({ submissionStatus }) => {
  return (
    <FlexContainer columns left>
      {submissionStatus === "message-submission" && (
        <>
          <Title
            as="h2"
            color="orange"
            weight="700"
            mt={{ min: "15px", max: "30px" }}
            mb="8"
          >
            Fale Conosco
          </Title>
          <Text variant="secondary" weight="300">
            Você precisa de ajuda? Deseja saber a disponibilidade de um produto?
            O qualquer outra coisa que possa ser de ajuda nas sua compras.
          </Text>
        </>
      )}
      {submissionStatus === "contactInfo-submission" && (
        <>
          <Title
            as="h2"
            color="orange"
            weight="700"
            mt={{ min: "15px", max: "30px" }}
            mb="8"
          >
            Só mais um minutinho...
          </Title>
          <Text variant="secondary" weight="300">
            Digite seu nome e endereço de e-mail para que possamos responder a
            suas perguntas o solicitações.
          </Text>
        </>
      )}
    </FlexContainer>
  )
}

export default FaleConoscoFormHeader
