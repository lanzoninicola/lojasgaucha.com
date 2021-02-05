import * as React from "react"
import styled, { css } from "styled-components"
import { Space } from "@layouts/index"
import { Size } from "@layouts/index"

import { useResponsiveSize } from "@hooks/index"

import { stringToArray, arrayToString, right } from "@utils/index"

import { useDOMInfo } from "../../_hooks/useDOM"

// https://stackoverflow.com/questions/56651064/changing-tag-type-when-ealignXtending-component-in-styled-components

const DEFAULT_GAP = 16

const Grid = css`
  ${Space}
  ${Size}
  display: grid;
  justify-items: ${({ left, centerX, right, stretchX }) => {
    if (left) return `start`
    if (centerX) return `center`
    if (right) return `end`
    if (stretchX) return `stretch`
  }}}};
  align-items: ${({ top, centerY, bottom, stretchY }) => {
    if (top) return `start`
    if (centerY) return `center`
    if (bottom) return `end`
    if (stretchY) return `stretch`
  }};
  gap: ${({ gap }) => {
    if (gap) return useResponsiveSize(gap)

    return useResponsiveSize(DEFAULT_GAP)
  }};
`

Grid.defaultProps = {
  left: true,
  centerY: true,
}

/**
 *    PancakeStack: Max 3 rows
 *    https://1linelayouts.glitch.me/*
 */
export const PancakeStack = styled.div`
  ${Grid}
  grid-template-rows: auto minmax(0,1fr) auto;
  ${props => props.$style ?? {}}
`

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

export const GridContainer = ({ children, ...props }) => {
  const ref = useDOMInfo()

  return (
    <StyledGridContainer ref={ref} {...props}>
      {children}
    </StyledGridContainer>
  )
}
