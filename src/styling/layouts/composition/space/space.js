import { css } from "styled-components"
import {
  stringToArray,
  arrayToString,
  isNotString,
  isString,
} from "@utils/index"

import { useResponsiveSize } from "@hooks/index"

const Space = css`
  margin-left: ${({ ml, marginLeft }) => {
    const marginProp = ml ?? marginLeft
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-right: ${({ mr, marginRight }) => {
    const marginProp = mr ?? marginRight
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-bottom: ${({ mb, marginBottom }) => {
    const marginProp = mb ?? marginBottom
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin-top: ${({ mt, marginTop }) => {
    const marginProp = mt ?? marginTop
    if (marginProp) return useResponsiveSize(marginProp)

    return null
  }};
  margin: ${({ m, margin }) => {
    if (m || margin) {
      const marginProp = m ?? margin

      if (isNotString(marginProp)) {
        console.error(
          `The property "m" or "margin" must be a string and not ${typeof marginProp}`
        )
        return null
      }

      const marginArray = stringToArray(marginProp, " ")

      let newMarginArray = marginArray.map(marginValue => {
        return useResponsiveSize(marginValue)
      })

      return arrayToString(newMarginArray)
    }

    return null
  }};
  padding-left: ${({ pl, paddingLeft }) => {
    const paddingProp = pl ?? paddingLeft
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-right: ${({ pr, paddingRight }) => {
    const paddingProp = pr ?? paddingRight
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-bottom: ${({ pb, paddingBottom }) => {
    const paddingProp = pb ?? paddingBottom
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding-top: ${({ pt, paddingTop }) => {
    const paddingProp = pt ?? paddingTop
    if (paddingProp) return useResponsiveSize(paddingProp)

    return null
  }};
  padding: ${({ p, padding }) => {
    // log("space", { condition: p || padding, p: p, padding: padding })
    if (p || padding) {
      const paddingProp = p ?? padding

      //TODO: manage this
      // if (isObject(paddingProp)) {
      //   // console.log(useResponsiveSize(paddingProp))
      //   // Object.keys(paddingProp).forEach(prop => {
      //   //   const paddingArray = stringToArray(paddingProp[prop], " ")
      //   //   let newPaddingArray = paddingArray.map(paddingValue => {
      //   //     return useResponsiveSize(paddingValue)
      //   //   })
      //   //   return arrayToString(newPaddingArray)
      //   // })
      // }

      if (isString(paddingProp)) {
        const paddingArray = stringToArray(paddingProp, " ")

        let newPaddingArray = paddingArray.map(paddingValue => {
          return useResponsiveSize(paddingValue)
        })
        return arrayToString(newPaddingArray)
      }
    }

    return null
  }};
`
export default Space
