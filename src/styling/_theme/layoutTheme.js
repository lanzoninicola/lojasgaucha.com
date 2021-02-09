import carouselTheme from "./layouts/carouselTheme"
import { getCSSRelativeUnits, composeCSSValue } from "../layouts/_utils/CSSUnit"

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
        CSSUnits: getCSSRelativeUnits(),
      },
      carousel: carouselTheme(CONFIG),
    },
    data: {
      carousel: carouselTheme(DATA),
    },
    utils: {
      composeCSSValue: prop => composeCSSValue(prop),
    },
  }

  return layoutTheme
}

export default layoutTheme
