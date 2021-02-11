import { css } from "styled-components"
import { Space } from "@layouts/index"
import { Size } from "@layouts/index"

import { useResponsiveSize } from "@hooks/index"

// https://stackoverflow.com/questions/56651064/changing-tag-type-when-ealignXtending-component-in-styled-components

const DEFAULT_GAP = 16

const Grid = css`
  ${Space}
  ${Size}
  display: grid;
  justify-items: ${({ left, centerX, right, stretchX }) => {
    if (left) return `start`
    if (centerX) return `center`
    if (right) return `end`
    if (stretchX) return `stretch`
  }}}};
  align-items: ${({ top, centerY, bottom, stretchY }) => {
    if (top) return `start`
    if (centerY) return `center`
    if (bottom) return `end`
    if (stretchY) return `stretch`
  }};
  gap: ${({ theme, gap }) => {
    if (gap) return useResponsiveSize(gap)

    return useResponsiveSize(DEFAULT_GAP)
  }};
  max-width: 100vw;
`

Grid.defaultProps = {
  left: true,
  centerY: true,
}

export default Grid
