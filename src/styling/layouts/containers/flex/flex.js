import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { Space } from "@layouts/index"
import { Size } from "@layouts/index"

import { useDOMInfo } from "../../../_hooks/useDOM"
// import { isUndefined, warn } from "../../utils"
// import DOMNodeInspect from "../utils/DOMNodeInspect/DOMNodeInspect"

const Flex = styled.div`
  ${Space}
  ${Size}
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

const FlexContainer = ({ children, ...props }) => {
  const ref = useDOMInfo()

  /**
  This is not always true

  if (props?.centerX && isUndefined(props?.h100)) {
      warn(
        "FlexContainer",
        '"centerX" prop requires also "h100" prop for flex container'
      )
  }

  if (props?.centerY && isUndefined(props?.w100) {
      warn(
        "FlexContainer",
        '"centerY" prop requires also "w100" prop for flex container'
      )
  }
 */

  return (
    <>
      <Flex ref={ref} {...props}>
        {children}
      </Flex>
    </>
  )
}

export default FlexContainer
