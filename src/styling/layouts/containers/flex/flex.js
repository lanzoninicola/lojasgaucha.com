import styled from "styled-components"

import { Space } from "@layouts/index"
import { Size } from "@layouts/index"

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
  position: ${({ relative, absolute, fixed, sticky }) => {
    if (relative) return `relative`
    if (absolute) return `absolute`
    if (fixed) return `fixed`
    if (sticky) return `sticky`

    return `relative`
  }};
  ${props => props.$style ?? {}}
`

Flex.defaultProps = {
  overflowHide: null,
}

export default Flex
