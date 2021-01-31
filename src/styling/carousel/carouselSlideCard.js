import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import colorsTheme from "../_theme/colorsTheme"
import { FlexContainer, Space, Size } from "../layouts/inner"

const StyledCardWrapper = styled.div`
  ${Space}
  ${Size}
  min-width: 100%;
  background: ${({ theme, bg }) => {
    if (bg) return colorsTheme(bg)
    return theme?.layout?.config?.carousel?.card?.background
  }};
  border-radius: ${({ theme }) =>
    theme?.layout?.config?.carousel?.card?.borderRadius ?? "25px"};
  scroll-snap-align: center;
  margin-bottom: 20px;
  ${({ $style }) => $style ?? {}}
`

const CarouselSlideCard = ({ children, ...props }) => {
  return (
    <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
      <StyledCardWrapper {...props}>{children}</StyledCardWrapper>
    </FlexContainer>
  )
}
export default CarouselSlideCard

CarouselSlideCard.propTypes = {
  children: PropTypes.node.isRequired,
}
