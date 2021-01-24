import * as React from "react"
import styled from "styled-components"

import { FlexContainer, GridContainer } from "../../../../styling/layouts/inner"
import InputText from "../../../../styling/Inputs/text/inputText"
import InputTextArea from "../../../../styling/Inputs/text/inputTextArea"
import InputButtonSubmit from "../../../../styling/Inputs/submit/inputButtonSubmit"

import InputIconSubmit from "../../../../styling/Inputs/submit/inputIconSubmit"
import SVGIcon from "../../../../styling/icons/SVGIcon"

import { useForm } from "react-hook-form"
import FaleConoscoFormHeader from "./fale-conosco-form-header"
import useViewportInfo from "../../../../styling/_hooks/useViewportInfo"

// TODO: making the react-hook-form like a plugin of a form
// TODO: using form for analytics thanks to form state: https://react-hook-form.com/api#formState

const StyledForm = styled.form``

const FaleConoscoForm = () => {
  const [formStatus, setFormStatus] = React.useState("idle")
  const [focusField, setFocusField] = React.useState()
  const fullNameRef = React.createRef()
  const emailRef = React.createRef()
  const messageRef = React.createRef()

  const { height } = useViewportInfo()

  const {
    register,
    errors,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm()

  const handleFocustInputItem = e => {
    setFocusField(e.target.name)
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
      {!focusField && <FaleConoscoFormHeader />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer column centerX>
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
            onFocus={handleFocustInputItem}
            mb={!focusField && `8`}
          />

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
            onFocus={handleFocustInputItem}
            mb={!focusField && `8`}
          />
        </FlexContainer>
        <GridContainer columns="1fr 0.15fr" rows="1fr" hAuto centerY gap="5">
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
            onFocus={handleFocustInputItem}
          />
          <InputIconSubmit bg="orange" />
          {/* <InputButtonSubmit>Envia mensagem</InputButtonSubmit> */}
        </GridContainer>
      </StyledForm>
    </GridContainer>
  )
}

export default FaleConoscoForm
