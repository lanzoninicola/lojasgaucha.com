import * as React from "react"

import { ButtonPrimaryOrange } from "../../buttons/index"

const inputButtonSubmit = ({ children, ...props }) => {
  return (
    <ButtonPrimaryOrange as="input" type="submit" {...props}>
      {children}
    </ButtonPrimaryOrange>
  )
}

export default inputButtonSubmit
