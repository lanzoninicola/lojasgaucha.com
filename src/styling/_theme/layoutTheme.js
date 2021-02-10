import carouselTheme from "./layouts/carouselTheme"
import { CSSRelativeUnits, composeCSSValue } from "@layouts/lib/index"

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
        CSSUnits: CSSRelativeUnits,
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
