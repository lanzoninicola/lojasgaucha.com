import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import colorsTheme from "../../_theme/colorsTheme"
import InputLabel from "../inputLabel"
import { FlexContainer } from "@layouts/index"

import ErrorMessage from "../errors/errorMessage"

const StyledInputTextArea = styled.textarea`
  height: 90px;
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.fontFamily};
  font-size: ${({ theme, fontSize }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue

    if (fontSize) return composeCSSValue(fontSize)

    return theme?.form?.layout?.textArea?.variants?.firebase?.size
  }};
  line-height: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.lineHeight};
  padding: 0px 4px;
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

const InputTextArea = React.forwardRef(
  (
    {
      name,
      placeholder,
      isRequired,
      isFocused,
      noLabel,
      labelText,
      reactHookForm,
      mt,
      mb,
      ...props
    },
    ref
  ) => {
    return (
      <FlexContainer hAuto wAuto mt={mt ?? "16"} mb={mb ?? "16"}>
        {!noLabel && (
          <InputLabel htmlFor={name} text={labelText} {...props?.labelStyle} />
        )}
        <StyledInputTextArea
          ref={e => {
            reactHookForm.register(e, {
              required: reactHookForm.validation.errorMessage,
            })
            ref.current = e // you can still assign to ref
          }}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          {...props}
        />
        {reactHookForm.errors[name] && (
          <ErrorMessage
            text={reactHookForm.errors[name]?.message}
            color={colorsTheme(reactHookForm.validation?.color)}
          />
        )}
      </FlexContainer>
    )
  }
)

InputTextArea.defaultProps = {
  isRequired: false,
  noLabel: false,
}

InputTextArea.propTypes = {
  name: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === "") {
      return new Error(
        `${componentName} - "${propName}" prop (type "string") is missing.`
      )
    }
  },
  isRequired: PropTypes.bool,
  noLabel: (props, propName, componentName) => {
    if (props[propName] === false && props["labelText"] === undefined) {
      return new Error(
        `${componentName} - "${propName}" prop (type "string") is missing.`
      )
    }
  },
  labelText: PropTypes.string,
  labelStyle: PropTypes.object,
  reactHookForm: PropTypes.object,
}

export default InputTextArea
