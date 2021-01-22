import * as React from "react"
import styled from "styled-components"

import { ButtonPrimaryOrange } from "../../buttons/index"

const StyledInputSubmit = styled.input`
  margin-top: 16px;
`

const InputSubmit = ({ children, ...props }) => {
  return (
    <ButtonPrimaryOrange as="input" type="submit" {...props}>
      {children}
    </ButtonPrimaryOrange>
  )
}

export default InputSubmit
