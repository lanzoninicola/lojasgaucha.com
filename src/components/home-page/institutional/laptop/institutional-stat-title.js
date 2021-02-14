import * as React from "react"
import { Title } from "@typography"

const InstitutionalStatTitle = ({ children }) => {
  return (
    <Title as="h5" weight="400" color="white" lowercase>
      {children}
    </Title>
  )
}

export default InstitutionalStatTitle
