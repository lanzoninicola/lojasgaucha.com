import * as React from "react"
import { useForm } from "react-hook-form"

import { GridFixedContainer, FlexContainer } from "@layouts/index"
import {
  FormInnerWrapper,
  FormInputText,
  FormTextArea,
  SubmitButton,
} from "@form"
import { Title } from "@typography"

const FaleConoscoLaptopForm = ({ formState, handleSubmission }) => {
  const { register, errors, handleSubmit } = useForm()

  return (
    <GridFixedContainer id="fale-conosco-form" columns="1fr" rAuto>
      <Title as="h5" weight="700" color="orange" uppercase center>
        se você não está com pressa
      </Title>
      <Title as="h5" weight="700" color="orange" uppercase center>
        pode escrever aqui
      </Title>
      <FormInnerWrapper
        reactHookForm={{ handleSubmit }}
        handleSubmission={handleSubmission}
        gap="32"
      >
        <FormInputText
          variant="primary"
          name="fullname"
          label={{ text: "SEU NOME", style: { color: "blue", weight: "600" } }}
          placeholder="O meu nome è..."
          isRequired
          reactHookForm={{
            register,
            errors,
            validation: {
              errorMessage: "Opa! Parece que você não digitou o seu nome...",
              style: { color: "orange" },
            },
          }}
        />
        <FormInputText
          variant="primary"
          name="email"
          label={{
            text: "SEU EMAIL",
            style: { color: "blue", weight: "600" },
          }}
          placeholder="O meu email è..."
          isRequired
          reactHookForm={{
            register,
            errors,
            validation: {
              errorMessage: "Opa! Parece que você não digitou o seu email...",
              style: { color: "orange" },
            },
          }}
        />
        <FormTextArea
          variant="primary"
          name="message"
          label={{
            text: "SEU MENSAGEM",
            style: { color: "blue", weight: "600" },
          }}
          placeholder="Bom dia, preciso saber..."
          isRequired
          fontSize="16"
          reactHookForm={{
            register,
            errors,
            validation: {
              errorMessage:
                "Opa! Parece que você não escreveu nenhuma mensagem...",
              style: { color: "orange" },
            },
          }}
        />
        <FlexContainer centerX centerY>
          <SubmitButton variant="primary" color="orange">
            ENVIA MENSAGEM
          </SubmitButton>
        </FlexContainer>
      </FormInnerWrapper>
    </GridFixedContainer>
  )
}

export default FaleConoscoLaptopForm
