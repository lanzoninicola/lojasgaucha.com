import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colorsTheme } from "@theme/index"
import { FlexContainer } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"
import { composeCSSValue } from "@layouts/lib/index"

import InputLabel from "../inputLabel"

import ErrorMessage from "../errors/errorMessage"

const StyledInputTextArea = styled.textarea`
  height: 90px;
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.fontFamily};
  font-size: ${({ theme, fontSize }) => {
    if (fontSize) {
      fontSize = composeCSSValue(fontSize)
      return useResponsiveSize(fontSize)
    }

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
    font-size: ${() => useResponsiveSize("14px")};
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
      <FlexContainer hAuto wAuto mt="16" mb="16">
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
