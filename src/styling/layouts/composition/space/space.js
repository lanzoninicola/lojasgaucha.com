import { css } from "styled-components"
import { stringToArray, arrayToString, isNotString } from "@utils/index"

import { useResponsiveSize } from "@hooks/index"

const Space = css`
  margin-left: ${({ theme, ml, marginLeft }) => {
    const { device, diagonal } = theme?.viewport

    const marginProp = ml ?? marginLeft
    if (marginProp) return useResponsiveSize({ device, diagonal }, marginProp)

    return null
  }};
  margin-right: ${({ theme, mr, marginRight }) => {
    const { device, diagonal } = theme?.viewport
    const marginProp = mr ?? marginRight
    if (marginProp) return useResponsiveSize({ device, diagonal }, marginProp)

    return null
  }};
  margin-bottom: ${({ theme, mb, marginBottom }) => {
    const { device, diagonal } = theme?.viewport
    const marginProp = mb ?? marginBottom
    if (marginProp) return useResponsiveSize({ device, diagonal }, marginProp)

    return null
  }};
  margin-top: ${({ theme, mt, marginTop }) => {
    const { device, diagonal } = theme?.viewport
    const marginProp = mt ?? marginTop
    if (marginProp) return useResponsiveSize({ device, diagonal }, marginProp)

    return null
  }};
  margin: ${({ theme, m, margin }) => {
    const { device, diagonal } = theme?.viewport
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
        return useResponsiveSize({ device, diagonal }, marginValue)
      })

      return arrayToString(newMarginArray)
    }

    return null
  }};
  padding-left: ${({ theme, pl, paddingLeft }) => {
    const { device, diagonal } = theme?.viewport
    const paddingProp = pl ?? paddingLeft
    if (paddingProp) return useResponsiveSize({ device, diagonal }, paddingProp)

    return null
  }};
  padding-right: ${({ theme, pr, paddingRight }) => {
    const { device, diagonal } = theme?.viewport
    const paddingProp = pr ?? paddingRight
    if (paddingProp) return useResponsiveSize({ device, diagonal }, paddingProp)

    return null
  }};
  padding-bottom: ${({ theme, pb, paddingBottom }) => {
    const { device, diagonal } = theme?.viewport
    const paddingProp = pb ?? paddingBottom
    if (paddingProp) return useResponsiveSize({ device, diagonal }, paddingProp)

    return null
  }};
  padding-top: ${({ theme, pt, paddingTop }) => {
    const { device, diagonal } = theme?.viewport
    const paddingProp = pt ?? paddingTop
    if (paddingProp) return useResponsiveSize({ device, diagonal }, paddingProp)

    return null
  }};
  padding: ${({ theme, p, padding }) => {
    const { device, diagonal } = theme?.viewport
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
        return useResponsiveSize({ device, diagonal }, paddingValue)
      })
      return arrayToString(newPaddingArray)
    }

    return null
  }};
`
export default Space
