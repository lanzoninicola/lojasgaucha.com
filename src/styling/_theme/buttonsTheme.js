import { colorsTheme } from "@theme"

const buttonTheme = () => {
  return {
    primary: {
      blue: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorsTheme("orange")}`,
          onHover: "none",
        },
        background: {
          default: colorsTheme("blue"),
          onFocus: colorsTheme("blue"),
          onHover: colorsTheme("blueLight"),
        },
        labelColor: {
          default: colorsTheme("whitegray"),
          onFocus: colorsTheme("orange"),
          onHover: colorsTheme("whitegray"),
        },
      },
      orange: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorsTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorsTheme("orange"),
          onFocus: colorsTheme("orange"),
          onHover: colorsTheme("orangeLight"),
        },
        labelColor: {
          default: colorsTheme("whitegray"),
          onFocus: colorsTheme("blue"),
          onHover: colorsTheme("whitegray"),
        },
      },
    },

    secondary: {
      green: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorsTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorsTheme("green"),
          onFocus: colorsTheme("green"),
          onHover: colorsTheme("greenLight"),
        },
        labelColor: {
          default: colorsTheme("blue"),
          onFocus: colorsTheme("blue"),
          onHover: colorsTheme("blue"),
        },
      },
      yellow: {
        border: {
          default: "none",
          onFocus: `2px solid ${colorsTheme("blue")}`,
          onHover: "none",
        },
        background: {
          default: colorsTheme("yellow"),
          onFocus: colorsTheme("yellow"),
          onHover: colorsTheme("yellowLight"),
        },
        labelColor: {
          default: colorsTheme("blue"),
          onFocus: colorsTheme("blue"),
          onHover: colorsTheme("blue"),
        },
      },
    },
  }
}

export default buttonTheme
