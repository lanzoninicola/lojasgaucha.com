import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import colorsTheme from "../../_theme/colorsTheme"
import InputLabel from "../inputLabel"
import { FlexContainer } from "../../layouts/inner"

import ErrorMessage from "../errors/errorMessage"

const StyledInputTextArea = styled.textarea`
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

  &::placeholder {
    font-size: 14px;
    opacity: 0.3;
  }
`

const InputTextArea = ({
  name,
  isRequired,
  placeholder,
  noLabel,
  labelText,
  children,
  reactHookForm,
  validation,
  ...props
}) => {
  const { register, errors } = reactHookForm

  return (
    <FlexContainer hAuto wAuto mt="16">
      {!noLabel && (
        <InputLabel htmlFor="name" text={labelText} {...props?.labelStyle} />
      )}
      <StyledInputTextArea
        ref={register({ required: validation?.errorMessage })}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {errors[name] && (
        <ErrorMessage
          text={errors[name]?.message}
          color={colorsTheme(validation?.color)}
        />
      )}
    </FlexContainer>
  )
}

InputTextArea.defaultProps = {
  isRequired: false,
  noLabel: false,
}

InputTextArea.propTypes = {
  name: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === "") {
      return new Error(
        `${componentName} - "name" prop (type "string") is missing.`
      )
    }
  },
  isRequired: PropTypes.bool,
  noLabel: (props, propName, componentName) => {
    if (props[propName] === false && props["labelText"] === undefined) {
      return new Error(
        `${componentName} - "labelText" prop (type "string") is missing.`
      )
    }
  },
  labelText: PropTypes.string,
  labelStyle: PropTypes.object,
  reactHookForm: PropTypes.object,
}

export default InputTextArea
