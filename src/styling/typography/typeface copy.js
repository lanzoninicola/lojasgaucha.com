import { css } from "styled-components"
import PropTypes from "prop-types"

import useResponsiveSize from "../_hooks/useResponsiveSize"

const Typeface = css`
  font-family: ${({ theme, variant }) => theme.typography[variant].family};
  font-style: ${({ italic }) => {
    if (italic) return `italic`

    return `normal`
  }};
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ capitalize, uppercase, lowercase }) => {
    if (capitalize) return capitalize
    if (uppercase) return `uppercase`
    if (lowercase) return `lowercase`

    return null
  }};
  letter-spacing: ${({ ls }) => ls ?? null};
  color: ${({ theme, color }) => {
    let isHEXColor = color.substring(0, 1) === "#"

    if (isHEXColor) {
      return color
    }

    return theme.colors(color)
  }};
  text-align: ${({ align }) => align};
  margin-top: ${({ mt }) => {
    if (mt === undefined) {
      return
    }

    if (mt && !mt?.min) {
      return `${mt}`
    }

    return useResponsiveSize({ min: mt?.min, max: mt?.max }, { unit: "px" })
  }};
  margin-bottom: ${({ mb }) => {
    if (mb === undefined) {
      return
    }

    if (mb && !mb?.min) {
      return `${mb}`
    }

    return useResponsiveSize({ min: mb?.min, max: mb?.max }, { unit: "px" })
  }};
  margin-left: ${({ ml }) => {
    if (ml === undefined) {
      return
    }

    if (ml && !ml?.min) {
      return `${ml}`
    }

    return useResponsiveSize({ min: ml?.min, max: ml?.max }, { unit: "px" })
  }};
  margin-right: ${({ mr }) => {
    if (mr === undefined) {
      return
    }

    if (mr && !mr?.min) {
      return `${mr}`
    }

    return useResponsiveSize({ min: mr?.min, max: mr?.max }, { unit: "px" })
  }};
  padding-top: ${({ pt }) => {
    if (pt === undefined) {
      return
    }

    if (pt && !pt?.min) {
      return `${pt}`
    }

    return useResponsiveSize({ min: pt?.min, max: pt?.max }, { unit: "px" })
  }};
  padding-bottom: ${({ pb }) => {
    if (pb === undefined) {
      return
    }

    if (pb && !pb?.min) {
      return `${pb}`
    }

    return useResponsiveSize({ min: pb?.min, max: pb?.max }, { unit: "px" })
  }};
  padding-left: ${({ pl }) => {
    if (pl === undefined) {
      return
    }

    if (pl && !pl?.min) {
      return `${pl}`
    }

    return useResponsiveSize({ min: pl?.min, max: pl?.max }, { unit: "px" })
  }};
  padding-right: ${({ pr }) => {
    if (pr === undefined) {
      return
    }

    if (pr && !pr?.min) {
      return `${pr}`
    }

    return useResponsiveSize({ min: pr?.min, max: pr?.max }, { unit: "px" })
  }};
`

export default Typeface

Typeface.defaultProps = {
  variant: "primary",
}

Typeface.propTypes = {
  variant: PropTypes.string,
}
