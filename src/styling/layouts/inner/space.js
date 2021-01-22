import { css } from "styled-components"
import { stringToArray, arrayToString, isNotString } from "../../utils/index"

import useResponsiveSize from "../../_hooks/useResponsiveSize"

const Space = css`
  margin-left: ${({ theme, ml, marginLeft }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const marginProp = ml ?? marginLeft

    if (marginProp && !marginProp?.min) {
      return composeCSSValue(marginProp)
    }

    if (marginProp && marginProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(marginProp?.min),
        max: composeCSSValue(marginProp?.max),
      })
    }

    return null
  }};
  margin-right: ${({ theme, mr, marginRight }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const marginProp = mr ?? marginRight

    if (marginProp && !marginProp?.min) {
      return composeCSSValue(marginProp)
    }

    if (marginProp && marginProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(marginProp?.min),
        max: composeCSSValue(marginProp?.max),
      })
    }

    return null
  }};
  margin-bottom: ${({ theme, mb, marginBottom }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const marginProp = mb ?? marginBottom

    if (marginProp && !marginProp?.min) {
      return composeCSSValue(marginProp)
    }

    if (marginProp && marginProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(marginProp?.min),
        max: composeCSSValue(marginProp?.max),
      })
    }

    return null
  }};
  margin-top: ${({ theme, mt, marginTop }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const marginProp = mt ?? marginTop

    if (marginProp && !marginProp?.min) {
      return composeCSSValue(marginProp)
    }

    if (marginProp && marginProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(marginProp?.min),
        max: composeCSSValue(marginProp?.max),
      })
    }

    return null
  }};
  margin: ${({ theme, m, margin }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue

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
        return composeCSSValue(marginValue)
      })

      return arrayToString(newMarginArray)
    }

    return null
  }};
  padding-left: ${({ theme, pl, paddingLeft }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const paddingProp = pl ?? paddingLeft

    if (paddingProp && !paddingProp?.min) {
      return composeCSSValue(paddingProp)
    }

    if (paddingProp && paddingProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(paddingProp?.min),
        max: composeCSSValue(paddingProp?.max),
      })
    }

    return null
  }};
  padding-right: ${({ theme, pr, paddingRight }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const paddingProp = pr ?? paddingRight

    if (paddingProp && !paddingProp?.min) {
      return composeCSSValue(paddingProp)
    }

    if (paddingProp && paddingProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(paddingProp?.min),
        max: composeCSSValue(paddingProp?.max),
      })
    }

    return null
  }};
  padding-bottom: ${({ theme, pb, paddingBottom }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const paddingProp = pb ?? paddingBottom

    if (paddingProp && !paddingProp?.min) {
      return composeCSSValue(paddingProp)
    }

    if (paddingProp && paddingProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(paddingProp?.min),
        max: composeCSSValue(paddingProp?.max),
      })
    }

    return null
  }};
  padding-top: ${({ theme, pt, paddingTop }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue
    const paddingProp = pt ?? paddingTop

    if (paddingProp && !paddingProp?.min) {
      return composeCSSValue(paddingProp)
    }

    if (paddingProp && paddingProp?.min) {
      return useResponsiveSize({
        min: composeCSSValue(paddingProp?.min),
        max: composeCSSValue(paddingProp?.max),
      })
    }

    return null
  }};
  padding: ${({ theme, p, padding }) => {
    const composeCSSValue = theme?.layout?.utils?.composeCSSValue

    if (p || padding) {
      const paddingProp = p ?? padding

      if (isNotString(paddingProp)) {
        console.error(
          `The property "p" or "padding" must be a string and not ${typeof paddingProp}`
        )
        return null
      }

      const paddingArray = stringToArray(paddingProp, " ")

      let newPaddingArray = paddingArray.map(paddingValue => {
        return composeCSSValue(paddingValue)
      })
      return arrayToString(newPaddingArray)
    }

    return null
  }};
`
export default Space
