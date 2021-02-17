import * as React from "react"
import { useForm } from "react-hook-form"

import { GridFixedContainer } from "@layouts/index"
import { FormInnerWrapper, FormInputText, FormTextArea } from "@form"
import { Title } from "@typography"

const FaleConoscoLaptopForm = ({ formState, handleSubmission }) => {
  const { register, errors, handleSubmit } = useForm()

  return (
    <GridFixedContainer id="fale-conosco-form" columns="1fr" rAuto>
      <Title as="h5" weight="700" color="orange" uppercase center>
        se você não está com pressa, pode escrever aqui
      </Title>
      <FormInnerWrapper
        reactHookForm={{ handleSubmit }}
        handleSubmission={handleSubmission}
      >
        <GridFixedContainer columns="1fr" rAuto>
          <FormInputText
            variant="firebase"
            name="fullname"
            label={{ text: "SEU NOME" }}
            placeholder="O meu nome è..."
            isRequired
            reactHookForm={{
              register,
              errors,
              validation: {
                errorMessage: "Opa! Parece que você não digitou o seu nome...",
                style: { fontSize: "12px", color: "white" },
              },
            }}
          />
          <FormInputText
            variant="firebase"
            name="email"
            label={{ text: "SEU EMAIL" }}
            placeholder="O meu email è..."
            isRequired
            reactHookForm={{
              register,
              errors,
              validation: {
                errorMessage: "Opa! Parece que você não digitou o seu email...",
                style: { fontSize: "12px", color: "white" },
              },
            }}
          />
          <FormTextArea
            variant="firebase"
            name="message"
            label={{ text: "SEU MENSAGEM" }}
            placeholder="Bom dia, preciso saber..."
            isRequired
            fontSize="16"
            reactHookForm={{
              register,
              errors,
              validation: {
                errorMessage:
                  "Opa! Parece que você não escreveu nenhuma mensagem...",
                style: { fontSize: "12px", color: "white" },
              },
            }}
          />
        </GridFixedContainer>
      </FormInnerWrapper>
    </GridFixedContainer>
  )
}

export default FaleConoscoLaptopForm
