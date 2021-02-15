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
 * @param {string|number} cssPropValue
 */
function extractCSSUnit(cssPropValue) {
  if (isNumber(cssPropValue)) {
    cssPropValue = cssPropValue.toString()
  }

  return cssPropValue.match(/[%vhrempx]/gi)?.join("")
}

/**
 * @param {string|number} cssPropValue
 */
function extractNumberValue(cssPropValue) {
  // if (isNumber(cssPropValue)) {
  //   cssPropValue = cssPropValue.toString()
  // }
  // return cssPropValue.match(/[0-9]+/g)?.join("")
  return parseFloat(cssPropValue)
}

/**
 * @param {string} shouldCSSUnit
 */
function cssUnitValidation(shouldCSSUnit) {
  if (isIncluded(shouldCSSUnit, CSSUnits)) {
    return true
  }
  return false
}

/**
 * cssPropValue is the value assigned to the CSS property by the user .
 * It could contains or not the CSS unit
 * @param {string|number} cssPropValue
 */
export default function composeCSSValue(cssPropValue) {
  if (cssPropValue === undefined) {
    return cssPropValue
  }

  if (isNotString(cssPropValue) && isNotNumber(cssPropValue)) {
    error(
      `composeCSSValue()`,
      `The value of CSS Property used must be a string or number and not ${typeof cssPropValue}`
    )
    return cssPropValue
  }

  const userCSSUnit = extractCSSUnit(cssPropValue)
  const userCSSValue = extractNumberValue(cssPropValue)

  const isValidCSSUnit = cssUnitValidation(userCSSUnit)

  // if user passed a number value with a CSSUnit that doesn't exist
  if (!isValidCSSUnit && userCSSUnit?.length > 0) {
    // console.log("composeCSSValue 1", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: defaultCSSUnit }
  }

  // if user passed only a number value
  if (!isValidCSSUnit && userCSSUnit === undefined) {
    // console.log("composeCSSValue 2", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: defaultCSSUnit }
  }

  // if user passed a number value with a CSSUnit that exist
  if (isValidCSSUnit) {
    // console.log("composeCSSValue 3", `${userCSSValue}${defaultCSSUnit}`)
    return { value: userCSSValue, unit: userCSSUnit }
  }
}
