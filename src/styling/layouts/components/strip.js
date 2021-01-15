import * as React from "react"
import { FlexContainer } from "../inner/index"

/**
 *  A strip is a component that spans the width of the screen with a full-width look
 */

export const Strip = ({ children, ...props }) => {
  return (
    <FlexContainer
      as="section"
      tagName="strip"
      vh100
      vw100
      centerY
      pl="16"
      pr="16"
      {...props}
    >
      {children}
    </FlexContainer>
  )
}
