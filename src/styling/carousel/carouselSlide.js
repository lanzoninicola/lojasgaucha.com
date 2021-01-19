import * as React from "react"
import { FlexMotionContainer } from "../layouts/inner/index"

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

const CarouselSlide = ({ children, ...props }) => {
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

export default CarouselSlide

CarouselSlide.propTypes = {
  // items: PropTypes.array,
}
