import * as React from "react"

import BottomGridNavbar from "@navbar/bottomGridNavbar"
import NavbarItems from "@navbar/items/navbarItems"

import NavbarItemMobile from "./navbarItem-mobile"

const NavbarMobile = () => {
  return (
    <BottomGridNavbar columns="1fr 1fr 1fr 1fr 1fr" h="70px">
      <NavbarItems
        module="website"
        NavItemComponent={props => <NavbarItemMobile {...props} />}
      />
    </BottomGridNavbar>
  )
}

export default NavbarMobile
