import * as React from "react"
import PropTypes from "prop-types"
import { ThemeContext } from "styled-components"
import { FlexMotionContainer } from "../layouts/inner/index"
import CarouselSlideCard from "./carouselSlideCard"
import CarouselSlideCardShadow from "./carouselCardShadow"

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

const CarouselSlide = ({ items = [] }) => {
  const themeContext = React.useContext(ThemeContext)
  const showCardShadow =
    themeContext?.layout?.config?.carousel?.card?.shadow?.visible

  console.log(items)

  return (
    <>
      <FlexMotionContainer
        id="carousel-slide"
        row
        w100
        left
        hAuto
        overflowAuto
        stretchX
        $style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
        }}
      >
        {items.map((item, index) => (
          <CarouselSlideCard key={index} item={item} />
        ))}
      </FlexMotionContainer>
      {showCardShadow && <CarouselSlideCardShadow />}
    </>
  )
}

export default CarouselSlide

CarouselSlide.propTypes = {
  // items: PropTypes.array,
}
