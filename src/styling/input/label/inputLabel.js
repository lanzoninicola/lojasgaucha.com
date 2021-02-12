import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SmallText } from "@typography"

const StyledLabel = styled.label``

const InputLabel = ({ htmlFor, text, labelStyle = {} }) => {
  return (
    <StyledLabel htmlFor={htmlFor ?? ""}>
      <SmallText
        weight="600"
        color="orange"
        capitalize="uppercase"
        mb="6px"
        $style={{
          letterSpacing: "1px",
        }}
        {...labelStyle}
      >
        {text && text}
      </SmallText>
    </StyledLabel>
  )
}

InputLabel.propTypes = {
  htmlFor: (props, propName, componentName) => {
    if (props[propName] === undefined || props[propName] === "") {
      return new Error(
        `${componentName} - Please, add "name" prop (type "string") to the InputText component.`
      )
    }
  },
  text: PropTypes.string,
  labelStyle: PropTypes.object,
}

export default InputLabel
