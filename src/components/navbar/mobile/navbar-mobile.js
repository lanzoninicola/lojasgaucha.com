import * as React from "react"

import { ThemeContext } from "styled-components"
import BottomNavbar from "../../../styling/navbar/bottomNavbar"
import NavbarItems from "../../../styling/navbar/items/navbarItems"

import NavbarItemMobile from "./navbarItem-mobile"

const NavbarMobile = () => {
  const themeContext = React.useContext(ThemeContext)

  const itemList = themeContext?.navbar?.mobile?.items
  const columnsGrid = itemList.map(item => "1fr").join(" ")

  return (
    <BottomNavbar columns={columnsGrid} h="70px">
      <NavbarItems
        items={itemList}
        NavItemComponent={props => <NavbarItemMobile {...props} />}
      />
    </BottomNavbar>
  )
}

export default NavbarMobile
