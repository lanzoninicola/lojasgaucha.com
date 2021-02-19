import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { useResponsiveSize } from "@hooks"
import { isNotUndefined, warn } from "@utils/index"

/**
 *  Fluid Grid Container:
 *
 *  The grid will respond according to the viewport and it will be responsive in a specific breakpoint.
 *  Create as many columns as there are children inside this container
 *
 */

const StyledGridFluidContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ theme, columns, cWidth }) => {
    if (isNotUndefined(columns)) {
      warn(
        `StyledGridFluidContainer`,
        `You've passed the "columns" prop in a "Fluid Container", the value will be ignored. You would probably want to use a "Fixed Grid"`
      )
    }

    const responsiveGridColumns = theme?.layout?.grid?.responsive?.columns
    const minColumnsWidth =
      cWidth ?? responsiveGridColumns.custom ?? responsiveGridColumns.default

    return `repeat(auto-fit, minmax(min(${useResponsiveSize(
      minColumnsWidth
    )}, 100%), 1fr))`
  }};
  grid-template-rows: ${({ theme, rows }) => {
    if (isNotUndefined(rows)) {
      warn(
        `StyledGridFluidContainer`,
        `You've passed the "rows" prop in a "Fluid Container", the value will be ignored. You would probably want to use a "Fixed Grid"`
      )
    }

    const responsiveGridRows = theme?.layout?.grid?.responsive?.rows
    const minRowsWidth = responsiveGridRows.custom ?? responsiveGridRows.default

    return `repeat(auto-fit, minmax(min(${useResponsiveSize(
      minRowsWidth
    )}, 100%), 1fr))`
  }}};

  ${props => props.$style ?? {}}
`

const GridFluidContainer = ({ children, ...props }) => {
  return (
    <StyledGridFluidContainer {...props}>{children}</StyledGridFluidContainer>
  )
}

export default GridFluidContainer
