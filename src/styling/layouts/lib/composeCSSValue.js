import CSSRelativeUnits from "./CSSRelativeUnits"
import {
  isIncluded,
  isNotNumber,
  isNumber,
  isNotString,
  error,
} from "../../utils/index"

const CSSUnits = CSSRelativeUnits.values
const defaultCSSUnit = CSSRelativeUnits.default

/**
 * @param {string|number} CSSPropertyValue
 */
function grabCSSUnit(CSSPropertyValue) {
  if (isNumber(CSSPropertyValue)) {
    CSSPropertyValue = CSSPropertyValue.toString()
  }

  return CSSPropertyValue.match(/[%vhrempx]/gi)?.join("")
}

/**
 * @param {string|number} CSSPropertyValue
 */
function grabNumberValue(CSSPropertyValue) {
  if (isNumber(CSSPropertyValue)) {
    CSSPropertyValue = CSSPropertyValue.toString()
  }

  return CSSPropertyValue.match(/[0-9]+/g)?.join("")
}

/**
 * @param {string} shouldCSSUnit
 */
function matchCSSUnit(shouldCSSUnit) {
  if (isIncluded(shouldCSSUnit, CSSUnits)) {
    return true
  }
  return false
}

/**
 * CSSPropertyValue is the value assigned to the CSS property by the user .
 * It could contains or not the CSS unit
 * @param {string|number} CSSPropertyValue
 */
export default function composeCSSValue(CSSPropertyValue) {
  if (CSSPropertyValue === undefined) {
    return CSSPropertyValue
  }

  if (isNotString(CSSPropertyValue) && isNotNumber(CSSPropertyValue)) {
    error(
      `composeCSSValue()`,
      `The value of CSS Property used must be a string or number and not ${typeof CSSPropertyValue}`
    )
    return CSSPropertyValue
  }

  const grabbedCSSUnit = grabCSSUnit(CSSPropertyValue)
  const grabbedValue = grabNumberValue(CSSPropertyValue)
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
    return `${CSSPropertyValue}`
  }
}
