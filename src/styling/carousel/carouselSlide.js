import * as React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { FlexMotionContainer } from "@layouts/index"
import { colorsTheme } from "@theme"
import { useResponsiveSize } from "@hooks"

// const enterAnimation = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       // On Tap - Navigation
//       type: "spring",
//       delay: 0,
//       stiffness: 500,
//       damping: 60,
//       mass: 1,
//     },
//   },
//   exit: {},
// }

const BaseCarouselSlide = ({ children, ...props }) => {
  return (
    <>
      <FlexMotionContainer
        row
        w100
        left
        hAuto
        overflowAuto
        stretchX
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
        {...props}
      >
        {children}
      </FlexMotionContainer>
    </>
  )
}

const CarouselSlide = styled(BaseCarouselSlide)`
  &::-webkit-scrollbar-track {
    cursor: pointer;
    -webkit-box-shadow: ${() =>
      `inset 0 0 6px ${colorsTheme("orange", {
        colorUnit: "rgba",
        opacity: 0.3,
      })}`};
    background-color: ${() =>
      colorsTheme("orange", { colorUnit: "rgba", opacity: 0 })};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    cursor: pointer;
    width: ${() => useResponsiveSize({ laptop: 10, tablet: 8, mobile: 5 })};
    background-color: ${() =>
      colorsTheme("orange", { colorUnit: "rgba", opacity: 0 })};
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 10px;
    background-color: ${() =>
      colorsTheme("orange", { colorUnit: "rgba", opacity: 0.6 })};
  }
`

export default CarouselSlide

CarouselSlide.propTypes = {
  children: PropTypes.node.isRequired,
}
