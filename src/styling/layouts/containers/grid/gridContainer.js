import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { parseGridTemplateValues, composeCSSValue } from "@layouts/lib/index"

import { isNotUndefined, isNotString, warn, error } from "@utils/index"

/**
 *  GridContainer options:
 *
 *  1- No "columns" prop: the grid respond according the viewport and will be responsive on specific breackpoint
 *  2- Columns declaration: let you define how many columns the grid will have
 *
 */

const StyledGridContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ theme, columns, cAuto }) => {
    if (cAuto && isNotUndefined(columns)) {
      warn(
        "gridContainer",
        `You have declared "columns" value with "cAuto / grid-auto-columns". "columns" prop will be ignored`
      )
      return null
    }

    if (isNotUndefined(columns)) {
      if (isNotString(columns)) {
        error(
          `StyledGridContainer`,
          `"columns" prop must be a string, instead: "${typeof columns}"`
        )
        return null
      }

      return parseGridTemplateValues(columns)
    }

    const customResponsiveBreakpoint =
      theme?.breakpoints?.responsiveGrid?.columns.width
    const defaultResponsiveBreakpoint =
      theme?.breakpoints?.responsiveGrid?.columns.default

    return `repeat(auto-fit, minmax(min(${
      composeCSSValue(customResponsiveBreakpoint) ??
      composeCSSValue(defaultResponsiveBreakpoint)
    }, 100%), 1fr))`
  }};
  grid-template-rows: ${({ theme, rows, rAuto }) => {
    if (rAuto && isNotUndefined(rows)) {
      warn(
        "gridContainer",
        `You have declared "rows" value with "rAuto / grid-auto-rows". "rows" prop will be ignored`
      )
      return null
    }

    if (isNotUndefined(rows)) {
      if (isNotString(rows)) {
        error(
          `StyledGridContainer`,
          `"rows" prop must be a string, instead: "${typeof rows}"`
        )
        return null
      }

      return parseGridTemplateValues(rows)
    }

    const customResponsiveBreakpoint =
      theme?.breakpoints?.responsiveGrid?.rows.height

    const defaultResponsiveBreakpoint =
      theme?.breakpoints?.responsiveGrid?.rows.default

    return `repeat(auto-fit, minmax(min(${
      composeCSSValue(customResponsiveBreakpoint) ??
      composeCSSValue(defaultResponsiveBreakpoint)
    }, 100%), 1fr))`
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

const GridContainer = ({ children, ...props }) => {
  return <StyledGridContainer {...props}>{children}</StyledGridContainer>
}

export default GridContainer
