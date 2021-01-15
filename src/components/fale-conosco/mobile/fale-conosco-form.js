import * as React from "react"
import styled from "styled-components"
import { FlexContainer } from "../../../styling/layouts/inner"
import { Title, Text, SmallText } from "../../../styling/typography"

import { useForm } from "react-hook-form"
import colorsTheme from "../../../styling/_theme/colorsTheme"

const StyledForm = styled.form``
const StyledLabel = styled.label``
const StyledInput = styled.input`
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.input?.variants?.firebase?.fontFamily};
  font-size: ${({ theme }) =>
    theme?.form?.layout?.input?.variants?.firebase?.size};
  line-height: ${({ theme }) =>
    theme?.form?.layout?.input?.variants?.firebase?.lineHeight};
  text-transform: ${({ capitalize }) => capitalize ?? null};
  background: transparent;
  border: 0;
  border-bottom: ${() => `1px solid ${colorsTheme("orange")}`};
  border-color: ${() => colorsTheme("orange")};
  caret-color: ${() =>
    colorsTheme("whitegray", { colorUnit: "rgba", opacity: "0.5" })};
  transition: border 0.15s cubic-bezier(0, 0, 0.2, 1);
  padding: 1px 2px;
  color: ${() => colorsTheme("white")};

  &:focus {
    outline: none;
  }
`
const StyledInputForm = styled.div`
  margin-top: 20px;
`
const StyledTextArea = styled.textarea`
  height: 90px;
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.fontFamily};
  font-size: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.size};
  line-height: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.lineHeight};
  color: ${() => colorsTheme("white")};
  border: 0;
  border-bottom: ${() => `1px solid ${colorsTheme("orange")}`};
  background: transparent;
  border-color: ${() => colorsTheme("orange")};
  resize: none;

  &:focus {
    outline: none;
  }
`
const StyledFooterForm = styled.div``

const FaleConoscoForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

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
          <StyledInputForm>
            <StyledLabel htmlFor="fullName">
              <SmallText
                weight="600"
                color="orange"
                capitalize="uppercase"
                size="12"
                mb="6px"
              >
                Seu Nome
              </SmallText>
            </StyledLabel>
            <StyledInput
              type="text"
              id="fullName"
              name="fullName"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <p>This field is required</p>}
          </StyledInputForm>

          <StyledInputForm>
            <StyledLabel htmlFor="email">
              <SmallText
                weight="600"
                variant="secondary"
                color="orange"
                capitalize="uppercase"
                size="12"
                mb="3px"
              >
                Seu Email
              </SmallText>
            </StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              capitalize="lowercase"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <p>This field is required</p>}
          </StyledInputForm>

          <StyledInputForm>
            <StyledLabel htmlFor="message">
              <SmallText
                weight="600"
                color="orange"
                capitalize="uppercase"
                size="12"
                mb="6px"
              >
                Seu Mensagem
              </SmallText>
            </StyledLabel>
            <StyledTextArea
              id="message"
              name="message"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <p>This field is required</p>}
          </StyledInputForm>
        </FlexContainer>
      </StyledForm>
      <StyledFooterForm>
        <StyledInput type="submit" />
      </StyledFooterForm>
    </FlexContainer>
  )
}

export default FaleConoscoForm
