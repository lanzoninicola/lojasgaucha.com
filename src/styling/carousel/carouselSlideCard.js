import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { motion } from "framer-motion"
import colorsTheme from "../_theme/colorsTheme"
import { FlexContainer, Space, Size } from "../layouts/inner"

// const StyledCardWrapper = styled.div`
//   ${Space}
//   ${Size}
//   min-width: 100%;
//   background: ${({ theme, bg }) => {
//     if (bg) return colorsTheme(bg)
//     return theme?.layout?.config?.carousel?.card?.background
//   }};
//   border-radius: ${({ theme }) =>
//     theme?.layout?.config?.carousel?.card?.borderRadius ?? "25px"};
//   scroll-snap-align: center;
//   margin-bottom: 20px;
//   ${({ $style }) => $style ?? {}}
// `

const StyledCardWrapper = styled.div`
  position: relative;
  min-width: 100%;
  border-radius: 25px;

  margin-bottom: 20px;

  padding: 20px 30px 20px 30px;
  height: 90%;
`

const CarouselSlideCard = ({ children, ...props }) => {
  return (
    <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
      <StyledCardWrapper>{children}</StyledCardWrapper>
      {/* <div
        style={{
          position: "relative",
          minWidth: "100%",
          borderRadius: "25px",
          scrollSnapAlign: "center",
          marginBottom: "20px",

          padding: "20px 30px 20px 30px",
          height: "90%",
        }}
      >
        {children}
      </div> */}
    </FlexContainer>
  )
}
export default CarouselSlideCard

CarouselSlideCard.propTypes = {
  children: PropTypes.node.isRequired,
}
