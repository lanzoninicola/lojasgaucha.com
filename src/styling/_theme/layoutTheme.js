import carouselTheme from "./layouts/carouselTheme"

const STYLE = "style"
const CONFIG = "config"
const DATA = "data"

function layoutTheme() {
  const layoutTheme = {
    style: {
      carousel: carouselTheme(STYLE),
    },
    config: {
      global: {
        CSSUnits: {
          default: "px",
          values: ["px", "rem", "em", "vh"],
        },
      },
      carousel: carouselTheme(CONFIG),
    },
    data: {
      carousel: carouselTheme(DATA),
    },
  }

  return layoutTheme
}

export default layoutTheme
