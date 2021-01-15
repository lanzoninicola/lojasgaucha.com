import * as React from "react"
import { ThemeContext } from "styled-components"

export function CSSLock({ min = 0, max = 0 }) {
  const themeContext = React.useContext(ThemeContext)

  return `calc(${min}px + (${max} - ${min}) * ((100vw - ${themeContext.breakpoints.small.width}px) /(${themeContext.breakpoints.xlarge.width} - ${themeContext.breakpoints.small.width})))`
}

export function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}
