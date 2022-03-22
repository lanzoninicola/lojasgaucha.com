import { css } from "styled-components"
import { Space } from "@layouts/index"
import { Size } from "@layouts/index"

import { useResponsiveSize } from "@hooks/index"

// https://stackoverflow.com/questions/56651064/changing-tag-type-when-ealignXtending-component-in-styled-components

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
    const themeGridLayout = theme?.layout?.grid

    return useResponsiveSize(themeGridLayout.gap.default)
  }};
  position: ${({ relative, absolute, fixed, sticky }) => {
    if (relative) return `relative`
    if (absolute) return `absolute`
    if (fixed) return `fixed`
    if (sticky) return `sticky`

    return `relative`
  }};
  max-width: 100vw;
  background: ${({ bg }) => {
    if (bg) return bg
    return null
  }};
`

Grid.defaultProps = {
  left: true,
  centerY: true,
}

export default Grid
