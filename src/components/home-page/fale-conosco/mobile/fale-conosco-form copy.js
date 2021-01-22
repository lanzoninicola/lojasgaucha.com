import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "../../../../styling/layouts/inner"
import { Title, Text } from "../../../../styling/typography"
import InputText from "../../../../styling/Inputs/text/inputText"
import InputTextArea from "../../../../styling/Inputs/text/inputTextArea"
import InputSubmit from "../../../../styling/Inputs/submit/inputSubmit"

import { useForm } from "react-hook-form"

const StyledForm = styled.form``

const FaleConoscoForm = () => {
  const { register, errors, handleSubmit, watch } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  console.log(errors)

  console.log(watch("fullName"))

  return (
    <FlexContainer column w100 hAuto>
      <Title as="h2" color="orange" weight="400">
        Deixa uma mensagem
      </Title>
      <Text variant="secondary" weight="300" size="16">
        Sua mensagem será enviada a um de nossos funcionários que entrará em
        contato com você. Fique olhando em seu e-mail.
      </Text>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer column centerX>
          <InputText
            name="fullName"
            labelText="SEU NOME"
            isRequired
            reactHookForm={{ register: prop => register(prop), errors }}
            validation={{
              errorMessage: "Opa! Parece que você não digitou o seu nome...",
              color: "white",
            }}
          />
          <InputText
            name="email"
            labelText="SEU EMAIL"
            isRequired
            reactHookForm={{ register: prop => register(prop), errors }}
            validation={{
              errorMessage: "Opa! Parece que você não digitou nenhum e-mail...",
              color: "white",
            }}
          />
          <InputTextArea
            name="message"
            labelText="SEU MENSAGEM"
            isRequired
            reactHookForm={{ register: prop => register(prop), errors }}
            validation={{
              errorMessage:
                "Opa! Parece que você não escreveu nenhuma mensagem...",
              color: "white",
            }}
          />
        </FlexContainer>
        <FlexContainer row centerX centerY mt="24px">
          <InputSubmit>Envia mensagem</InputSubmit>
        </FlexContainer>
      </StyledForm>
    </FlexContainer>
  )
}

export default FaleConoscoForm
