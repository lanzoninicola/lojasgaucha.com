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

  padding: 0px 4px;

  background: transparent;
  border: 0;
  border-bottom: ${() => `1px solid ${colorsTheme("orange")}`};
  border-color: ${() => colorsTheme("orange")};
  caret-color: ${() =>
    colorsTheme("whitegray", { colorUnit: "rgba", opacity: "0.5" })};
  transition: border 0.15s cubic-bezier(0, 0, 0.2, 1);
  color: ${() => colorsTheme("white")};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    opacity: 0.3;
  }
`

const InputText = React.forwardRef(
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
    // TODO: make the focus run
    // const [focusField, setFocusField] = React.useState()

    // const handleFocustInputItem = e => {
    //   setFocusField(e.target.name)
    // }

    return (
      <FlexContainer hAuto wAuto mt={mt ?? "16"} mb={mb ?? "16"}>
        {!noLabel && (
          <InputLabel htmlFor={name} text={labelText} {...props?.labelStyle} />
        )}
        <StyledInputText
          ref={e => {
            reactHookForm.register(e, {
              required: reactHookForm.validation.errorMessage,
            })
            ref.current = e
          }}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          // onFocus={handleFocustInputItem}
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

InputText.defaultProps = {
  isRequired: false,
  isFocused: false,
  noLabel: false,
}

InputText.propTypes = {
  name: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === "") {
      return new Error(`${componentName} - "name"?<string> prop is missing.`)
    }
  },
  isRequired: PropTypes.bool,
  noLabel: (props, propName, componentName) => {
    if (props[propName] === false && props["labelText"] === undefined) {
      return new Error(
        `${componentName} - "labelText"?<string> prop is missing.`
      )
    }
  },
  isFocused: PropTypes.bool,
  labelText: PropTypes.string,
  labelStyle: PropTypes.object,
  reactHookForm: PropTypes.object,
}

export default InputText
