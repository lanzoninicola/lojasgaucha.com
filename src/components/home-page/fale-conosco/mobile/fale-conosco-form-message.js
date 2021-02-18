import * as React from "react"
import { useForm } from "react-hook-form"

import { GridFixedContainer } from "@layouts/index"
import { SubmitIconButton } from "@form"
import { FormTextArea, FormInnerWrapper } from "@form"

const FaleConoscoFormMessage = ({ handleSubmission }) => {
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
      submissionStage="contactInfo-submission"
    >
      <GridFixedContainer columns="1fr 0.15fr" rows="1fr" hAuto centerY gap="4">
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
        <SubmitIconButton bg="orange" />
      </GridFixedContainer>
    </FormInnerWrapper>
  )
}

export default FaleConoscoFormMessage
