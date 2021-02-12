import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { parseGridTemplateValues, composeCSSValue } from "@layouts/lib/index"

import {
  isNotUndefined,
  isUndefined,
  isNotString,
  warn,
  error,
} from "@utils/index"

/**
 *  GridFixedContainer options:
 *
 *  1- No "columns" prop: the grid respond according the viewport and will be responsive on specific breackpoint
 *  2- Columns declaration: let you define how many columns the grid will have
 *
 */

const StyledGridFixedContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ theme, columns, cAuto }) => {
    if (isUndefined(columns)) {
      error(
        `StyledGridFixedContainer`,
        `"columns" prop is missing: ${typeof columns}. You must passing the "columns" prop in a "Fixed Grid Container"`
      )
      return
    }

    if (cAuto) {
      warn(
        "StyledGridFixedContainer",
        `You have passed "columns" prop with "cAuto / grid-auto-columns" prop. "columns" prop will be ignored`
      )
      return null
    }

    if (isNotString(columns)) {
      error(
        `StyledGridFixedContainer`,
        `"columns" prop must be a string, instead: "${typeof columns}"`
      )
      return
    }

    return parseGridTemplateValues(columns)
  }};
  grid-template-rows: ${({ theme, rows, rAuto }) => {
    if (isUndefined(rows)) {
      error(
        `StyledGridFixedContainer`,
        `"rows" prop is missing: ${typeof rows}. You must passing the "rows" prop in a "Fixed Grid Container"`
      )
      return
    }

    if (rAuto) {
      warn(
        "StyledGridFixedContainer",
        `You have passed "rows" prop with "rAuto / grid-auto-rows". "rows" prop will be ignored`
      )
      return null
    }

    if (isNotString(rows)) {
      error(
        `StyledGridFixedContainer`,
        `"rows" prop must be a string, instead: "${typeof rows}"`
      )
      return null
    }

    return parseGridTemplateValues(rows)
  }}};
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

const GridFixedContainer = ({ children, ...props }) => {
  return (
    <StyledGridFixedContainer {...props}>{children}</StyledGridFixedContainer>
  )
}

export default GridFixedContainer
