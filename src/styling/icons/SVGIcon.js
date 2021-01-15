import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

function SVGIcon({ name, size, color }) {
  const themeContext = React.useContext(ThemeContext)

  const SVGPath = themeContext.icons.catalog[name.toUpperCase()][size]
  // const iconColor = typeof color === "function" ? color : colorsTheme(color)

  return (
    <svg
      width={size} // icons are always equal width and height
      height={size} // icons are always equal width and height
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={SVGPath} fill={color} />
    </svg>
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
