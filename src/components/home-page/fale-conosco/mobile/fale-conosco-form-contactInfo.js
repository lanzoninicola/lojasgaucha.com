import * as React from "react"
import styled from "styled-components"

import { FlexContainer, GridContainer } from "../../../../styling/layouts/inner"
import InputText from "../../../../styling/Inputs/text/inputText"
import InputIconSubmit from "../../../../styling/Inputs/submit/inputIconSubmit"

import { useForm } from "react-hook-form"

const StyledForm = styled.form``

const FaleConoscoFormContactInfo = ({ handleSubmission }) => {
  const fullNameRef = React.createRef()
  const emailRef = React.createRef()

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    handleSubmission("submission-completed", data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer column>
        <InputText
          ref={fullNameRef}
          name="fullName"
          labelText="SEU NOME"
          placeholder="O meu nome è..."
          isRequired
          reactHookForm={{
            register: (...props) => register(...props),
            errors,
            validation: {
              errorMessage: "Opa! Parece que você não digitou o seu nome...",
              color: "white",
            },
          }}
          // onFocus={handleFocustInputItem}
          // mb={!focusField && `8`}
        />
        <GridContainer columns="1fr 0.15fr" rows="1fr" hAuto centerY gap="16">
          <InputText
            ref={emailRef}
            name="email"
            labelText="SEU EMAIL"
            placeholder="O meu email è..."
            isRequired
            reactHookForm={{
              register: (...props) => register(...props),
              errors,
              validation: {
                errorMessage:
                  "Opa! Parece que você não digitou nenhum e-mail...",
                color: "white",
              },
            }}
            // onFocus={handleFocustInputItem}
            // mb={!focusField && `8`}
          />
          <InputIconSubmit bg="orange" />
        </GridContainer>
      </FlexContainer>
    </StyledForm>
  )
}

export default FaleConoscoFormContactInfo
