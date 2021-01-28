import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"

import SVGIcon from "@icons/SVGIcon"

const NavItemIcon = ({ icon, color, spotlighted, size }) => {
  const themeContext = React.useContext(ThemeContext)
  const layoutConfig = themeContext?.navbar?.mobile?.layout

  return (
    <>
      <SVGIcon
        name={icon}
        size={size ?? layoutConfig?.items?.icons?.size}
        color={
          color
            ? color
            : spotlighted.yesno
            ? layoutConfig?.items?.icons?.colors?.spotligthed[
                spotlighted?.color
              ]
            : layoutConfig?.items?.icons?.colors?.default
        }
        mb="8"
      />
    </>
  )
}

NavItemIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  spotligthed: PropTypes.object,
}

export default NavItemIcon
