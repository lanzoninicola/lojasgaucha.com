import * as React from "react"
import styled, { css } from "styled-components"
import { Space } from "."

import {
  stringToArray,
  arrayToString,
  right,
  isNotIncluded,
  isFunction,
} from "../../utils/index"

import { useDOMInfo } from "../../_hooks/useDOM"

// https://stackoverflow.com/questions/56651064/changing-tag-type-when-ealignXtending-component-in-styled-components

const Grid = css`
  ${Space}
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
  gap: ${({ gap }) => gap ?? null};
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
  })
  return arrayToString(parsedRowsPropArray, " ")
}

const StyledGridContainer = styled.div`
  ${Grid}
  grid-template-columns: ${({ columns }) => {
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
  }};
  grid-template-rows: ${({ rows }) => {
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
  }};

  height: ${({ theme, h, height, h100, h100v, hAuto }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (h100) return `100%`
    if (h100v) return `100vh`
    if (hAuto) return `auto`
    if (h || height) {
      let inputValue = h ?? height

      if (isFunction(h)) {
        inputValue = h()
      }

      if (isFunction(height)) {
        inputValue = height()
      }

      const inputCSSUnit = right(inputValue, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${inputValue}${defaultCSSUnit}`
      }
      return `${inputValue}`
    }

    return `100%`
  }};
  width: ${({ theme, w, width, w100, w100v, wAuto }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (w100) return `100%`
    if (w100v) return `100vw`
    if (wAuto) return `auto`
    if (w || width) {
      let inputValue = w ?? width

      if (isFunction(w)) {
        inputValue = w()
      }

      if (isFunction(width)) {
        inputValue = width()
      }

      const inputCSSUnit = right(inputValue, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${inputValue}${defaultCSSUnit}`
      }
      return `${inputValue}`
    }
    return `100%`
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
