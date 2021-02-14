import * as React from "react"
import { Title } from "@typography"

const InstitutionalTitles = ({ children, ...props }) => {
  return (
    <Title as="h4" weight="400" color="white" lowercase {...props}>
      {children}
    </Title>
  )
}

export default InstitutionalTitles
