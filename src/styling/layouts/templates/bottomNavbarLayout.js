import * as React from "react"
import PropTypes from "prop-types"
import { GridContainer } from "@layouts/index"
import { BottomNavbar } from "@navbar/index"
import NavbarItemMobile from "../../../components/navbar/mobile/navbarItem-mobile"

const BottomNavbarLayout = ({ device, children, ...props }) => {
  return (
    <GridContainer rAuto device={device} {...props}>
      {children}
      <BottomNavbar NavItemComponent={NavbarItemMobile} />
    </GridContainer>
  )
}

BottomNavbarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  device: PropTypes.string,
}

export default BottomNavbarLayout
