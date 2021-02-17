import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Title, Text } from "@typography/index"

const FaleConoscoFormHeader = ({ submissionStage }) => {
  function renderMessageSubmissionHeader() {
    return (
      <>
        <Title as="h2" color="orange" weight="700" mt="16" mb="8">
          Fale Conosco
        </Title>
        <Text weight="300" color="white">
          Você precisa de ajuda? Deseja saber a disponibilidade de um produto? O
          qualquer outra coisa que possa ser de ajuda nas sua compras.
        </Text>
      </>
    )
  }

  function renderContactInfoHeader() {
    return (
      <>
        <Title as="h2" color="orange" weight="700" mt="16" mb="8">
          Só mais um minutinho...
        </Title>
        <Text weight="300" color="white">
          Digite seu nome e endereço de e-mail para que possamos responder a
          suas perguntas o solicitações.
        </Text>
      </>
    )
  }

  return (
    <FlexContainer columns left>
      {submissionStage === "message-submission" &&
        renderMessageSubmissionHeader()}
      {submissionStage === "contactInfo-submission" &&
        renderContactInfoHeader()}
    </FlexContainer>
  )
}

export default FaleConoscoFormHeader
