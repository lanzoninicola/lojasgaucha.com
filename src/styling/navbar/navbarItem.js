import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ModalContext from "../overlays/context/modalContext"

import { FlexContainer } from "../layouts/inner"
import { SmallText } from "../typography/index"
import SVGIcon from "../icons/SVGIcon"
import colorsTheme from "../_theme/colorsTheme"

const NavItemIcon = styled.div``
const NavItemText = styled.div``

const NavbarItem = ({ item, layoutConfig }) => {
  const modalContext = React.useContext(ModalContext)
  const [isModalShown, setIsModalShown] = React.useState(false)
  const { modalsQueue } = modalContext

  function shouldNavbarModal(modalsQueue) {
    let result = []
    modalsQueue.forEach(modal => {
      if (Object.values(modal)[0] === "navbar") {
        result.push(true)
      }
    })
    return result.length > 0
  }

  React.useEffect(() => {
    setIsModalShown(shouldNavbarModal(modalsQueue))
  }, [modalsQueue])

  return (
    <FlexContainer column centerY centerX h100>
      {layoutConfig?.items?.icons?.show && (
        <NavItemIcon>
          <SVGIcon
            name={item.icon}
            size={layoutConfig?.items?.icons?.size}
            color={
              item.spotlighted.yesno
                ? layoutConfig?.items?.icons?.colors?.spotligthed[
                    item?.spotlighted?.color
                  ]
                : isModalShown
                ? colorsTheme("white")
                : layoutConfig?.items?.icons?.colors?.default
            }
            mb="8"
          />
        </NavItemIcon>
      )}
      {layoutConfig?.items?.labels?.show && (
        <NavItemText>
          <SmallText
            variant="secondary"
            weight="800"
            color={
              item.spotlighted.yesno
                ? layoutConfig?.items?.icons?.colors?.spotligthed[
                    item?.spotlighted?.color
                  ]
                : isModalShown
                ? colorsTheme("white")
                : layoutConfig?.items?.icons?.colors?.default
            }
            size={{ min: 10, max: 12 }}
            lineHeight={layoutConfig?.items?.labels?.lineHeight}
            align="center"
            capitalize={layoutConfig?.items?.labels?.capitalize}
            wAuto
          >
            {item.name}
          </SmallText>
        </NavItemText>
      )}
    </FlexContainer>
  )
}

NavbarItem.propTypes = {
  item: PropTypes.object,
  layoutConfig: PropTypes.object,
}

export default NavbarItem
