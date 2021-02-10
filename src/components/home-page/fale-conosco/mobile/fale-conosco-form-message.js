import * as React from "react"
import styled from "styled-components"

import { GridContainer } from "@layouts/index"
import { InputTextArea, InputIconSubmit } from "@inputs"

import { useForm } from "react-hook-form"

// TODO: manage the focus of field

const StyledForm = styled.form``

const FaleConoscoFormMessage = ({ handleSubmission }) => {
  const messageRef = React.createRef()
  const {
    register,
    errors,
    handleSubmit,
    // watch,
    // formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm()

  const onSubmit = data => {
    handleSubmission("contactInfo-submission", data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <GridContainer columns="1fr 0.15fr" rows="1fr" hAuto centerY gap="4">
        <InputTextArea
          ref={messageRef}
          name="message"
          labelText="SEU MENSAGEM"
          placeholder="Bom dia, preciso saber..."
          isRequired
          reactHookForm={{
            register: (...props) => register(...props),
            errors,
            validation: {
              errorMessage:
                "Opa! Parece que você não escreveu nenhuma mensagem...",
              color: "white",
            },
          }}
          fontSize="16"
          // onFocus={handleFocustInputItem}
        />
        <InputIconSubmit bg="orange" />
      </GridContainer>
    </StyledForm>
  )
}

export default FaleConoscoFormMessage
