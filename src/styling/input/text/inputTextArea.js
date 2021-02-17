import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colorsTheme } from "@theme/index"
import { FlexContainer } from "@layouts/index"
import { useResponsiveSize } from "@hooks/index"
import {
  isUndefined,
  isNotUndefined,
  isNotString,
  isObject,
  error,
  warn,
} from "@utils"

import { InputLabel } from "../index"

// TODO: refactor TextArea
// change "variant" to prop of item
// h & w are fixed
// various colors is fixed
// font-size is fixed

const StyledInputTextArea = styled.textarea`
  height: 90px;
  width: 100%;
  font-family: ${({ theme }) =>
    theme?.form?.layout?.textArea?.variants?.firebase?.fontFamily};
  font-size: ${({ theme, fontSize }) => {
    if (fontSize) return useResponsiveSize(fontSize)

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
      variant,
      name,
      placeholder,
      isRequired,
      isFocused,
      noLabel,
      label = { text: "", style: {} },
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
          <InputLabel htmlFor={name} text={label?.text} {...label?.style} />
        )}
        <StyledInputTextArea
          ref={ref}
          variant={variant}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          {...props}
        />
      </FlexContainer>
    )
  }
)

InputTextArea.defaultProps = {
  isRequired: false,
  // isFocused: false,
  noLabel: false,
}

InputTextArea.propTypes = {
  variant: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(
        `${componentName}`,
        `"${propName}" prop is missing. It is required to define the style`
      )
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be a string, instead of: ${typeof props[propName]}`
      )
    }
  },
  name: (props, propName, componentName) => {
    if (isUndefined(props[propName]) || props[propName] === "") {
      return error(`${componentName}`, `"${propName}" prop is missing`)
    }

    if (isNotString(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be a string, instead of: ${typeof props[propName]}`
      )
    }
  },
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isFocused: PropTypes.bool,
  noLabel: PropTypes.bool,
  label: (props, propName, componentName) => {
    if (!isObject(props[propName])) {
      return error(
        `${componentName}`,
        `"${propName}" must be an object, instead of: ${typeof props[
          propName
        ]}.`
      )
    }

    if (!props[propName].hasOwnProperty("text")) {
      return error(
        `${componentName}`,
        `The "${propName}" object doesn't contain the "text" prop: ${JSON.stringify(
          props[propName]
        )}. It is required to render the label text.`
      )
    }

    if (
      isUndefined(props[propName]["text"]) ||
      props[propName]["text"] === ""
    ) {
      return error(
        `${componentName}`,
        `The prop "text" of "${propName}" object is undefined or empty: ${JSON.stringify(
          props[propName]
        )}. It is required to render the label text.`
      )
    }

    if (props["noLabel"] === true && isNotUndefined(props[propName]["text"])) {
      warn(
        `${componentName}`,
        `You have set to "${props["noLabel"]}" the prop "noLabel" and assigned a label to the input field`
      )
    }

    if (
      isNotUndefined(props[propName]["style"]) &&
      !isObject(props[propName]["style"])
    ) {
      return error(
        `${componentName}`,
        `The "style" prop of "${propName}" object must be an object, instead of: ${typeof props[
          propName
        ]["label"]}.`
      )
    }
  },
}

export default InputTextArea
