import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import { FlexContainer } from "@layouts/index"
import Svg from "./Svg"

import { isFunction } from "@utils"
// import { log } from "@utils/index"

function SVGIcon({ name, size, color, wSVG, hSVG, ...props }) {
  const themeContext = React.useContext(ThemeContext)
  const iconsTheme = themeContext?.icons
  const iconName = name.toUpperCase()

  const SVGSource = iconsTheme?.catalog[iconName][size]

  function renderSVG(props) {
    const isReactComponent = isFunction(SVGSource)
    if (isReactComponent) return () => <SVGSource />

    return <Svg sourcePath={SVGSource} {...props} />
  }

  return (
    <FlexContainer centerX centerY {...props}>
      {renderSVG({ name, size, color, wSVG, hSVG, ...props })}
    </FlexContainer>
  )
}

SVGIcon.defaultProps = {
  name: "CIRCLE_X",
  size: "24",
  color: "#000",
}

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  wSVG: PropTypes.string,
  hSVG: PropTypes.string,
}

export default SVGIcon
