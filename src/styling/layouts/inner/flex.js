import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { useDOMInfo } from "../../_hooks/useDOM"

import {
  stringToArray,
  arrayToString,
  right,
  isNotIncluded,
  isFunction,
} from "../../utils/index"

import DOMNodeInspect from "../utils/DOMNodeInspect/DOMNodeInspect"

const Flex = styled.div`
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
  margin-left: ${({ theme, ml, marginLeft }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (ml || marginLeft) {
      const marginProp = ml ?? marginLeft
      const inputCSSUnit = right(marginProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${marginProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  margin-right: ${({ theme, mr, marginRight }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (mr || marginRight) {
      const marginProp = mr ?? marginRight
      const inputCSSUnit = right(marginProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${marginProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  margin-bottom: ${({ theme, mb, marginBottom }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (mb || marginBottom) {
      const marginProp = mb ?? marginBottom
      const inputCSSUnit = right(marginProp, 2)

      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${marginProp}${defaultCSSUnit}`
      }
    }

    // return null
  }};
  margin-top: ${({ theme, mt, marginTop }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (mt || marginTop) {
      const marginProp = mt ?? marginTop
      const inputCSSUnit = right(marginProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${marginProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  margin: ${({ theme, m, margin }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (m || margin) {
      const marginProp = m ?? margin
      const marginArray = stringToArray(marginProp, " ")

      let newMarginArray = marginArray.map(marginValue => {
        const inputCSSUnit = right(marginValue, 2)
        if (isNotIncluded(inputCSSUnit, CSSUnits)) {
          return `${marginValue}${defaultCSSUnit}`
        }
      })

      return arrayToString(newMarginArray)
    }

    return null
  }};
  padding-left: ${({ theme, pl, paddingLeft }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (pl || paddingLeft) {
      const paddingProp = pl ?? paddingLeft
      const inputCSSUnit = right(paddingProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${paddingProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  padding-right: ${({ theme, pr, paddingRight }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (pr || paddingRight) {
      const paddingProp = pr ?? paddingRight
      const inputCSSUnit = right(paddingProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${paddingProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  padding-bottom: ${({ theme, pb, paddingBottom }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (pb || paddingBottom) {
      const paddingProp = pb ?? paddingBottom
      const inputCSSUnit = right(paddingProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${paddingProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  padding-top: ${({ theme, pt, paddingTop }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (pt || paddingTop) {
      const paddingProp = pt ?? paddingTop
      const inputCSSUnit = right(paddingProp, 2)
      if (isNotIncluded(inputCSSUnit, CSSUnits)) {
        return `${paddingProp}${defaultCSSUnit}`
      }
    }

    return null
  }};
  padding: ${({ theme, p, padding }) => {
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    // TODO: bug. Reproduce using the prop " p="20px" " in a flex container

    if (p || padding) {
      const paddingProp = p ?? padding
      const paddingArray = stringToArray(paddingProp, " ")

      let newPaddingArray = paddingArray.map(paddingValue => {
        const inputCSSUnit = right(paddingValue, 2)
        // console.log(inputCSSUnit)
        if (isNotIncluded(inputCSSUnit, CSSUnits)) {
          return `${paddingValue}${defaultCSSUnit}`
        } else {
          return `${paddingValue}`
        }
      })
      return arrayToString(newPaddingArray)
    }

    return null
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
