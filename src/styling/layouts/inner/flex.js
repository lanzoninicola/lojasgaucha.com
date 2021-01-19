import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { useDOMInfo } from "../../_hooks/useDOM"

import { right, isNotIncluded, isFunction } from "../../utils/index"

import DOMNodeInspect from "../utils/DOMNodeInspect/DOMNodeInspect"
import { Space } from "."

const Flex = styled.div`
  ${Space}
  display: flex;
  justify-content: ${({
    left,
    centerX,
    right,
    stretchXL,
    stretchXM,
    stretchXS,
  }) => {
    if (left) return `flex-start`
    if (centerX) return `center`
    if (right) return `flex-end`
    if (stretchXL) return `space-between`
    if (stretchXM) return `space-around`
    if (stretchXS) return `space-evenly`
  }}}};
  align-items: ${({ top, centerY, bottom, stretchY }) => {
    if (top) return `flex-start`
    if (centerY) return `center`
    if (bottom) return `flex-end`
    if (stretchY) return `stretch`
  }};
  flex-wrap: ${({ wrap, noWrap, overflowHide, overflowAuto }) => {
    if (overflowHide || overflowAuto) return `nowrap`
    if (wrap) return `nowrap`
    if (noWrap) return `nowrap`
    return "nowrap"
  }};
  height: ${({ theme, h, height, h100, h100v, hAuto, ...props }) => {
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

    return `auto`
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

    return `auto`
  }};
  overflow: ${({ overflowHide, overflowAuto }) => {
    if (overflowHide) return `hidden`
    if (overflowAuto) return `auto`
    return null
  }};
  flex-direction: ${({ direction, row, column }) => {
    if (row) return `row`
    if (direction === "row") return `row` // it will deprecated
    if (column) return `column`
    if (direction === "column") return `column` // it will deprecated
    return `column`
  }};
  ${props => props.$style ?? {}}
`

Flex.defaultProps = {
  overflowHide: null,
}

// export const FlexContainer = styled(Flex)`
//   flex-direction: ${({ direction, row, column }) => {
//     if (row) return `row`
//     if (direction === "row") return `row` // it will deprecated
//     if (column) return `column`
//     if (direction === "column") return `column` // it will deprecated
//     return null
//   }};
//   ${props => props.$style ?? {}}
// `

export const FlexContainer = ({ children, ...props }) => {
  const ref = useDOMInfo()

  return (
    <>
      <Flex ref={ref} {...props}>
        {children}
      </Flex>
    </>
  )
}

export const FlexMotion = styled(motion.custom(Flex))``

export const FlexMotionContainer = ({ children, ...props }) => {
  const ref = useDOMInfo()

  return (
    <>
      <FlexMotion ref={ref} {...props}>
        {children}
      </FlexMotion>
    </>
  )
}
