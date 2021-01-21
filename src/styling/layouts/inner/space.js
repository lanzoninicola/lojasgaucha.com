import { css } from "styled-components"
import {
  stringToArray,
  arrayToString,
  right,
  isNotIncluded,
  isNotString,
} from "../../utils/index"

const Space = css`
  margin-left: ${({ theme, ml, marginLeft }) => {
    // const composeCSSValue = theme?.layouts?.utils?.composeCSSValue
    const CSSUnits = theme?.layout?.config?.global?.CSSUnits?.values
    const defaultCSSUnit = theme?.layout?.config?.global?.CSSUnits?.default

    if (ml || marginLeft) {
      const marginProp = ml ?? marginLeft
      const inputCSSUnit = marginProp.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = marginProp.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = marginProp.match(/[%vhrempx]/gi)?.join("")

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
      const inputCSSUnit = marginProp.match(/[%vhrempx]/gi)?.join("")
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

      if (isNotString(marginProp)) {
        console.error(
          `The property "m" or "margin" must be a string and not ${typeof marginProp}`
        )
        return null
      }

      const marginArray = stringToArray(marginProp, " ")

      let newMarginArray = marginArray.map(marginValue => {
        const inputCSSUnit = marginValue.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = paddingProp.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = paddingProp.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = paddingProp.match(/[%vhrempx]/gi)?.join("")
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
      const inputCSSUnit = paddingProp.match(/[%vhrempx]/gi)?.join("")
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

      if (isNotString(paddingProp)) {
        console.error(
          `The property "p" or "padding" must be a string and not ${typeof paddingProp}`
        )
        return null
      }

      const paddingArray = stringToArray(paddingProp, " ")

      let newPaddingArray = paddingArray.map(paddingValue => {
        const inputCSSUnit = paddingValue.match(/[%vhrempx]/gi)?.join("")
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
`
export default Space
