import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import { FlexContainer } from "@layouts/index"
import { log } from "@utils/index"

const SVGIconBlueprint = ({ sourcePath, color, size }) => {
  return (
    <svg
      width={size} // icons always are equal width and height
      height={size} // icons always are equal width and height
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d={sourcePath} fill={color} />
    </svg>
  )
}

function SVGIcon({ name, size, color, ...props }) {
  const themeContext = React.useContext(ThemeContext)
  const iconName = name.toUpperCase()
  let RenderedSVGIcon = null

  // log("SVGIcon", themeContext?.icons?.catalog[iconName])

  const SVGSource = themeContext?.icons?.catalog[iconName][size]

  if (typeof SVGSource === "function") {
    RenderedSVGIcon = () => <SVGSource />
  } else {
    RenderedSVGIcon = props => <SVGIconBlueprint {...props} />
  }

  return (
    <FlexContainer centerX centerY {...props}>
      <RenderedSVGIcon sourcePath={SVGSource} size={size} color={color} />
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
