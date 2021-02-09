import * as React from "react"

import useDeepCompareEffect from "use-deep-compare-effect"

import ModalContext from "../../../styling/overlays/context/modalContext"
import NavbarItem from "../../../styling/navbar/item/navbarItem"

import { colorsTheme } from "@theme"

const NavbarItemMobile = props => {
  const modalContext = React.useContext(ModalContext)
  const [isModalShown, setIsModalShown] = React.useState(false)
  const { modalsQueue } = modalContext

  function shouldNavbarModal(modalsQueue) {
    let result = []
    modalsQueue.forEach(modal => {
      if (Object.values(modal)[0] === "navbarMobile") {
        result.push(true)
      }
    })
    return result.length > 0
  }

  useDeepCompareEffect(() => {
    setIsModalShown(shouldNavbarModal(modalsQueue))
  }, [modalsQueue])

  return (
    <NavbarItem
      iconColor={isModalShown ? colorsTheme("white") : null}
      textColor={isModalShown ? colorsTheme("white") : null}
      {...props}
    />
  )
}

export default NavbarItemMobile
