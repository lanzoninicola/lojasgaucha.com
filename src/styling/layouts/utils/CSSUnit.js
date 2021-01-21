import CSSRelativeUnits from "../config/CSSRelativeUnits"
import { isIncluded, isNotString } from "../../utils/index"

const CSSUnits = CSSRelativeUnits.values
const defaultCSSUnit = CSSRelativeUnits.default

export function getCSSRelativeUnits() {
  return CSSRelativeUnits
}

function grabCSSUnit(CSSpropertyValue) {
  return CSSpropertyValue.match(/[%vhrempx]/gi)?.join("")
}

function grabNumberValue(CSSpropertyValue) {
  return CSSpropertyValue.match(/[0-9]+/g)?.join("")
}

function matchCSSUnit(shouldCSSUnit) {
  if (isIncluded(shouldCSSUnit, CSSUnits)) {
    return true
  }
  return false
}

/**
 * CSSpropertyValue is the value assigned to the CSS property by the user .
 * It could contains or not the CSS unit
 * @param {string} CSSpropertyValue
 */
export function composeCSSValue(CSSpropertyValue) {
  if (CSSpropertyValue === undefined) {
    return CSSpropertyValue
  }

  if (isNotString(CSSpropertyValue)) {
    console.error(
      `isMatchWithCSSRelativeUnit() - The value of CSS Property used must be a string and not ${typeof CSSpropertyValue}`
    )
    return CSSpropertyValue
  }

  const grabbedCSSUnit = grabCSSUnit(CSSpropertyValue)
  const grabbedValue = grabNumberValue(CSSpropertyValue)
  const isMatchCSSUnit = matchCSSUnit(grabbedCSSUnit)

  // if user passed a number value with a CSSUnit that doesn't exist
  if (!isMatchCSSUnit && grabbedCSSUnit?.length > 0) {
    // console.log("composeCSSValue 1", `${grabbedValue}${defaultCSSUnit}`)
    return `${grabbedValue}${defaultCSSUnit}`
  }

  // if user passed only a number value
  if (!isMatchCSSUnit && grabbedCSSUnit === undefined) {
    // console.log("composeCSSValue 2", `${grabbedValue}${defaultCSSUnit}`)
    return `${grabbedValue}${defaultCSSUnit}`
  }

  // if user passed a number value with a CSSUnit that exist
  if (isMatchCSSUnit) {
    // console.log("composeCSSValue 3", `${grabbedValue}${defaultCSSUnit}`)
    return `${CSSpropertyValue}`
  }
}
