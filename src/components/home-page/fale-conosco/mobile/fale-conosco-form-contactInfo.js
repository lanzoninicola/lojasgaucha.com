import * as React from "react"
import { useForm } from "react-hook-form"

import { FlexContainer, GridFixedContainer } from "@layouts/index"
import { InputIconSubmit } from "@input/index"
import { FormInputText, FormInnerWrapper } from "@form"

const FaleConoscoFormContactInfo = ({ handleSubmission }) => {
  const {
    register,
    errors,
    handleSubmit,
    // watch,
    // formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm()

  return (
    <FormInnerWrapper
      reactHookForm={{ handleSubmit }}
      handleSubmission={handleSubmission}
      submissionStage="submission-completed"
    >
      <FlexContainer column>
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
        <GridFixedContainer
          columns="1fr 0.15fr"
          rows="1fr"
          hAuto
          centerY
          gap="16"
        >
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
          <InputIconSubmit bg="orange" />
        </GridFixedContainer>
      </FlexContainer>
    </FormInnerWrapper>
  )
}

export default FaleConoscoFormContactInfo
