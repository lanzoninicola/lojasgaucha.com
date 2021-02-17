import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { colorsTheme } from "@theme/index"
import { FlexContainer, Space } from "@layouts/index"
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

const StyledInputText = styled.input`
  ${Space}
  width: 100%;
  font-family: ${({ theme, variant }) => {
    const themeInputVariants = theme?.form?.layout?.input.variants
    return themeInputVariants[variant].fontFamily
  }};
  font-size: ${({ theme, variant }) => {
    const themeInputVariants = theme?.form?.layout?.input.variants
    return themeInputVariants[variant].size
  }};
  line-height: ${({ theme, variant }) => {
    const themeInputVariants = theme?.form?.layout?.input.variants
    return themeInputVariants[variant].lineHeight
  }};
  text-transform: ${({ lowercase, uppercase }) => {
    if (lowercase) return `lowercase`
    if (uppercase) return `uppercase`

    return null
  }};
  color: ${() => colorsTheme("white")};
  background: transparent;
  padding: 0px 4px;
  border: 0;
  border-bottom: ${() => `1px solid ${colorsTheme("orange")}`};
  border-color: ${() => colorsTheme("orange")};
  transition: border 0.15s cubic-bezier(0, 0, 0.2, 1);

  caret-color: ${() =>
    colorsTheme("whitegray", { colorUnit: "rgba", opacity: "0.5" })};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${() => useResponsiveSize("14px")};
    opacity: 0.3;
  }
`

// TODO: managing different style of input element, same as for textArea

const InputText = React.forwardRef(
  (
    {
      variant,
      name,
      placeholder,
      isRequired,
      isFocused,
      noLabel,
      label = { text: "", style: {} },
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
          <InputLabel htmlFor={name} text={label?.text} {...label?.style} />
        )}
        <StyledInputText
          ref={ref}
          variant={variant}
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          // onFocus={handleFocustInputItem}
          {...props}
        />
      </FlexContainer>
    )
  }
)

InputText.defaultProps = {
  isRequired: false,
  // isFocused: false,
  noLabel: false,
}

InputText.propTypes = {
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

export default InputText
