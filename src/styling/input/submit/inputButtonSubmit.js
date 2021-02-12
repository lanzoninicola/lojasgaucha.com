import * as React from "react"

import { ButtonPrimaryOrange } from "../../buttons/index"

const InputButtonSubmit = ({ children, ...props }) => {
  return (
    <ButtonPrimaryOrange as="input" type="submit" {...props}>
      {children}
    </ButtonPrimaryOrange>
  )
}

export default InputButtonSubmit
