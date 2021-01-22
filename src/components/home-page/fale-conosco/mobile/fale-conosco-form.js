import * as React from "react"
import styled from "styled-components"

import { FlexContainer, GridContainer } from "../../../../styling/layouts/inner"
import { Title, Text } from "../../../../styling/typography"
import InputText from "../../../../styling/Inputs/text/inputText"
import InputTextArea from "../../../../styling/Inputs/text/inputTextArea"
import InputSubmit from "../../../../styling/Inputs/submit/inputSubmit"

import { useForm } from "react-hook-form"

const StyledForm = styled.form``

const FaleConoscoForm = () => {
  const {
    register,
    errors,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  console.log(touched)

  return (
    <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
      <div>
        <Title
          as="h2"
          color="orange"
          weight="400"
          mt={{ min: "15px", max: "30px" }}
          mb="8px"
        >
          Deixa uma mensagem
        </Title>
        <Text variant="secondary" weight="300">
          Sua mensagem será enviada a um de nossos funcionários que entrará em
          contato com você. Fique olhando em seu e-mail.
        </Text>
      </div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer column centerX>
          <InputText
            name="fullName"
            labelText="SEU NOME"
            placeholder="O meu nome è..."
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
            placeholder="O meu email è..."
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
            placeholder="Bom dia, preciso saber..."
            isRequired
            reactHookForm={{ register: prop => register(prop), errors }}
            validation={{
              errorMessage:
                "Opa! Parece que você não escreveu nenhuma mensagem...",
              color: "white",
            }}
          />
        </FlexContainer>
        <FlexContainer row centerX centerY mt="32px">
          <InputSubmit>Envia mensagem</InputSubmit>
        </FlexContainer>
      </StyledForm>
    </GridContainer>
  )
}

export default FaleConoscoForm
