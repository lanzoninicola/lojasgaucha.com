import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

import { SmallText } from "@typography/index"

const NavItemText = ({ color, spotlighted, children }) => {
  const themeContext = React.useContext(ThemeContext)
  const layoutConfig = themeContext?.navbar?.mobile?.layout

  return (
    <>
      <SmallText
        variant="secondary"
        weight="600"
        color={
          color
            ? color
            : spotlighted.yesno
            ? layoutConfig?.items?.icons?.colors?.spotligthed[
                spotlighted?.color
              ]
            : layoutConfig?.items?.icons?.colors?.default
        }
        lineHeight={layoutConfig?.items?.labels?.lineHeight}
        align="center"
        capitalize={layoutConfig?.items?.labels?.capitalize}
        wAuto
      >
        {children}
      </SmallText>
    </>
  )
}

NavItemText.propTypes = {
  color: PropTypes.string,
  spotlighted: PropTypes.object,
  layoutConfig: PropTypes.object,
}

export default NavItemText
