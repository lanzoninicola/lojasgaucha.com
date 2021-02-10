import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { parseGridTemplateValues } from "@layouts/lib/index"

import { isNotString, error } from "@utils/index"

/**
 *  GridContainer: let you define how many columns and rows
 *
 */

const StyledGridContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ columns, cAuto }) => {
    if (!cAuto) {
      if (isNotString(columns)) {
        error(
          `StyledGridContainer`,
          `"rows" prop must be a string and not ${typeof columns}`
        )
        return null
      }

      if (isNotUndefined(columns)) {
        return parseGridTemplateValues(columns)
      }

      return `repeat(auto-fit, minmax(min(240px, 100%), 1fr))`
    }
  }};
  grid-template-rows: ${({ rows, rAuto }) => {
    if (!rAuto) {
      if (isNotString(rows)) {
        console.error(
          `StyledGridContainer - "rows" prop must be a string and not ${typeof rows}`
        )
        return null
      }

      if (isNotUndefined(rows)) {
        return parseGridTemplateValues(rows)
      }

      return `repeat(auto-fit, minmax(min(40px, 100%), 1fr))`
    }
  }};
  grid-auto-rows: ${({ rAuto }) => {
    if (rAuto) return `minmax(min-content, max-content)`
    return null
  }};
  grid-auto-columns: ${({ cAuto }) => {
    if (cAuto) return `minmax(min-content, max-content)`
    return null
  }};

  ${props => props.$style ?? {}}
`

const GridContainer = ({ children, ...props }) => {
  return <StyledGridContainer {...props}>{children}</StyledGridContainer>
}

export default GridContainer
