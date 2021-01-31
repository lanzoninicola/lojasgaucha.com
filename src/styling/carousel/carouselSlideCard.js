import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import CarouselSlideCardShadow from "./carouselCardShadow"

import { motion } from "framer-motion"
import colorsTheme from "../_theme/colorsTheme"
import { FlexMotionContainer, Space, Size } from "../layouts/inner"

const StyledCardWrapper = styled(motion.div)`
  ${Space}
  ${Size}
  min-width: 100%;
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
    <FlexMotionContainer column centerX stretchY style={{ minWidth: "100%" }}>
      <StyledCardWrapper {...props}>{children}</StyledCardWrapper>
    </FlexMotionContainer>
  )
}
export default CarouselSlideCard

CarouselSlideCard.propTypes = {
  children: PropTypes.node.isRequired,
}
