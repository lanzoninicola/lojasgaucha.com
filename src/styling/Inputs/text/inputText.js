import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import colorsTheme from "../../_theme/colorsTheme"
import InputLabel from "../inputLabel"
import { FlexContainer, Space } from "../../layouts/inner/index"

import ErrorMessage from "../errors/errorMessage"

const StyledInputText = styled.input`
  ${Space}
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.input.variants?.firebase?.fontFamily};
  font-size: ${({ theme }) =>
    theme?.form?.layout?.input.variants?.firebase?.size};
  line-height: ${({ theme }) =>
    theme?.form?.layout?.input.variants?.firebase?.lineHeight};
  text-transform: ${({ lowercase, uppercase }) => {
    if (lowercase) return `lowercase`
    if (uppercase) return `uppercase`

    return null
  }};
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

  &::placeholder {
    font-size: 14px;
    opacity: 0.3;
  }
`

const InputText = ({
  name,
  placeholder,
  isRequired,
  noLabel,
  labelText,
  children,
  reactHookForm,
  validation,
  ...props
}) => {
  const { register, errors } = reactHookForm

  return (
    <FlexContainer hAuto wAuto mt="16" mb="16">
      {!noLabel && (
        <InputLabel htmlFor="name" text={labelText} {...props?.labelStyle} />
      )}
      <StyledInputText
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

InputText.defaultProps = {
  isRequired: false,
  noLabel: false,
}

InputText.propTypes = {
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

export default InputText
