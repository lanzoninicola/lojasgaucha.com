import * as React from "react"
import { NavbarContainerFlexAuto, NavbarItems } from "@navbar/index"

const MapsNavbar = props => {
  return (
    <NavbarContainerFlexAuto {...props}>
      <NavbarItems module="maps" {...props} />
    </NavbarContainerFlexAuto>
  )
}

export default MapsNavbar
