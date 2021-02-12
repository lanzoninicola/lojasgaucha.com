import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import { colorsTheme } from "@theme"
import { FlexContainer, Space, Size } from "@layouts/index"

// TODO: view if this component can be replaced by "ImageCard" component

const StyledCardWrapper = styled.div`
  ${Space}
  ${Size}
  position: relative;
  min-width: 100%;
  background: ${({ theme, bg }) => {
    if (bg) return colorsTheme(bg)
    return theme?.components?.config?.carousel?.card?.background
  }};
  border-radius: ${({ theme }) =>
    theme?.components?.config?.carousel?.card?.borderRadius ?? `25px`};
  scroll-snap-align: center;
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
