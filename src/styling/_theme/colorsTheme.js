/**
 * Get the color for the theme.
 * @param {string} color
 * @param {object} options
 */

import { isNotUndefined } from "@utils"

const colorsTheme = (color, options = { colorUnit: "hex", opacity: 1 }) => {
  const colors = {
    orange: {
      hex: "#ED6B28",
      rgb: "237,107,40",
    },
    orangeLight: {
      hex: "#ed6b28",
      rgb: "237,107,40",
    },
    blue: {
      hex: "#091E5F",
      rgb: "9,30,95",
    },
    blueLight: {
      hex: "#091e5f",
      rgb: "9,30,95",
    },
    whitegray: {
      hex: "#F7F7F9",
      rgb: "247,247,249",
    },
    white: {
      hex: "#FEFEFF",
      rgb: "254,254,255",
    },
    black: {
      hex: "#464646",
      rgb: "70,70,70",
    },
    green: {
      hex: "#41E2BA",
      rgb: "65,226,186",
    },
    greenLight: {
      hex: "#41e2ba",
      rgb: "65,226,186",
    },
    yellow: {
      hex: "#F7E733",
      rgb: "247,231,51",
    },
    yellowLight: {
      hex: "#F7E733",
      rgb: "247,231,51",
    },
  }

  const isColorExists = isNotUndefined(colors[color])

  if (!isColorExists) {
    return colors["black"]["hex"]
  }

  const colorUnit = options?.colorUnit.toLowerCase()

  if (colorUnit === "hex") return colors[color]["hex"]

  if (colorUnit === "rgb")
    return `rgb(${colors[color]["rgb"]}, ${options?.opacity})`

  if (colorUnit === "rgba")
    return `rgba(${colors[color]["rgb"]}, ${options?.opacity})`

  return colors[color]["hex"]
}

export default colorsTheme
