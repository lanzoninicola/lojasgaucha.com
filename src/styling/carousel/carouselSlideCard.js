import * as React from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"

import CarouselSlideCardShadow from "./carouselCardShadow"

import { motion } from "framer-motion"
import colorsTheme from "../_theme/colorsTheme"
import { FlexMotionContainer, Space } from "../layouts/inner"

const StyledCardWrapper = styled(motion.div)`
  ${Space}
  width: 100%;
  min-width: 100%;
  height: 70%;
  background: ${({ theme, bg }) => {
    return colorsTheme(bg) ?? theme?.layout?.config?.carousel?.card?.background
  }};
  border-radius: ${({ theme }) =>
    theme?.layout?.config?.carousel?.card?.borderRadius ?? "25px"};
  scroll-snap-align: center;
  margin-bottom: 20px;
  ${({ $style }) => $style ?? {}}
`

const CarouselSlideCard = ({ children, ...props }) => {
  return (
    <FlexMotionContainer
      column
      centerX
      stretchY
      hAuto
      style={{ minWidth: "100%" }}
    >
      <StyledCardWrapper {...props}>{children}</StyledCardWrapper>
      <CarouselSlideCardShadow />
    </FlexMotionContainer>
  )
}
export default CarouselSlideCard

CarouselSlideCard.propTypes = {
  // item: PropTypes.array,
}
