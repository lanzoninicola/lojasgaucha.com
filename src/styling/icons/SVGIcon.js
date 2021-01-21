import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import { FlexContainer, Space } from "../layouts/inner"

function SVGIcon({ name, size, color, ...props }) {
  const themeContext = React.useContext(ThemeContext)

  const SVGPath = themeContext.icons.catalog[name.toUpperCase()][size]
  // const iconColor = typeof color === "function" ? color : colorsTheme(color)

  return (
    <FlexContainer centerX centerY {...props}>
      <svg
        width={size} // icons are always equal width and height
        height={size} // icons are always equal width and height
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d={SVGPath} fill={color} />
      </svg>
    </FlexContainer>
  )
}

export default SVGIcon

SVGIcon.defaultProps = {
  name: "CIRCLE_X",
  size: "24",
  color: "#000",
}

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
}
