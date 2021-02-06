import * as React from "react"
import styled from "styled-components"
import Grid from "./grid"

import { stringToArray, arrayToString, right } from "@utils/index"

/**
 *  GridContainer: let you define how many columns and rows
 *
 */

const parseGridTemplateValues = (values = "") => {
  const parsedRowsProp = stringToArray(values, " ")
  let parsedRowsPropArray = parsedRowsProp.map(value => {
    if (right(value, 2) === "fr") {
      if (value === "1fr") {
        return "minmax(0, 1fr)"
      }
      return value
    }
    return ""
  })

  return arrayToString(parsedRowsPropArray, " ")
}

const StyledGridContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ columns, cAuto }) => {
    if (!cAuto) {
      if (!typeof columns === "string") {
        console.error(
          `StyledGridContainer - "rows" prop must be a string and not ${typeof columns}`
        )
        return null
      }

      if (columns !== undefined) {
        return parseGridTemplateValues(columns)
      }

      return `repeat(auto-fit, minmax(min(240px, 100%), 1fr))`
    }
  }};
  grid-template-rows: ${({ rows, rAuto }) => {
    if (!rAuto) {
      if (!typeof rows === "string") {
        console.error(
          `StyledGridContainer - "rows" prop must be a string and not ${typeof rows}`
        )
        return null
      }

      if (rows !== undefined) {
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
