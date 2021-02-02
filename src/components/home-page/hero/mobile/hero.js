import * as React from "react"

import { Strip, GridContainer } from "../../../../styling/layouts/inner"

import useViewportInfo from "../../../../styling/_hooks/useViewportInfo"

import HeroHeadline from "./hero-headline"
import HeroAmbientes from "./hero-ambientes"

const Hero = () => {
  const { height } = useViewportInfo()
  const bannerHeight = 50
  const navbarBottomHeight = 65

  return (
    <>
      <Strip
        id="heroSection"
        h={() => height - bannerHeight - navbarBottomHeight}
        column
      >
        <GridContainer rows="0.5fr 1fr" columns="1fr" h100 w100>
          <HeroHeadline />
          <HeroAmbientes />
        </GridContainer>
      </Strip>
    </>
  )
}

export default Hero
