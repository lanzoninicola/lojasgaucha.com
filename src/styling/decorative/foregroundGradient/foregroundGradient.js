import * as React from "react"
import styled from "styled-components"
import { Size } from "@layouts"
import { colorsTheme } from "@theme"
import { isUndefined } from "@utils"

const StyledForegroundGradient = styled.div`
  ${Size}
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 1;
  background: ${({ gradient }) => {
    const colorStart = gradient?.start ?? "black"
    const _colorStart = colorsTheme(colorStart)

    return `${_colorStart}`
  }};
  mask-image: ${({ gradient }) => {
    // const { direction, start: colorStart, end: colorEnd } = gradient
    const direction = gradient?.direction ?? "right"
    const colorStart = gradient?.start ?? "black"
    const colorEnd = gradient?.end

    const _colorStart = colorsTheme(colorStart, {
      colorUnit: "rgba",
      opacity: 1,
    })

    let _colorEnd = ""
    if (isUndefined(colorEnd)) {
      _colorEnd = colorsTheme(colorStart, { colorUnit: "rgba", opacity: 0 })
    } else {
      _colorEnd = colorsTheme(colorEnd, { colorUnit: "rgba", opacity: 0 })
    }

    return `linear-gradient(to ${direction},
    ${_colorEnd} 25%,
    ${_colorStart} 50%)`
  }};
`

const ForegroundGradient = ({ gradient, ...props }) => {
  return (
    <StyledForegroundGradient
      w100
      h100
      absolute
      gradient={{ ...gradient }}
      {...props}
    />
  )
}

export default ForegroundGradient
