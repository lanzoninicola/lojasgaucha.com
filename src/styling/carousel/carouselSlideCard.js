import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

import { motion } from "framer-motion"
import colorsTheme from "../_theme/colorsTheme"

const StyledCardWrapper = styled(motion.div)`
  width: 100%;
  min-width: 100%;
  height: 100%;

  background: ${({ theme, bg }) => {
    return colorsTheme(bg) ?? theme?.layout?.config?.carousel?.card?.background
  }};
  border-radius: ${({ theme }) =>
    theme?.layout?.config?.carousel?.card?.borderRadius ?? "25px"};
  scroll-snap-align: center;
  border: 1px solid black;
`

const CarouselSlideCard = ({ children }) => {
  return (
    <>
      <StyledCardWrapper>{children}</StyledCardWrapper>
    </>
  )
}
export default CarouselSlideCard

CarouselSlideCard.propTypes = {
  // item: PropTypes.array,
}
