import * as React from "react"

import { GridFixedContainer } from "@layouts/index"
import HeroAmbientesHeadline from "./hero-ambientes-headline"
import HeroAmbientesCarousel from "./hero-ambientes-carousel"

const HeroAmbientes = () => {
  return (
    <GridFixedContainer id="heroAmbientes" rows="0.1fr 1fr" columns="1">
      <HeroAmbientesHeadline />
      <HeroAmbientesCarousel />
    </GridFixedContainer>
  )
}

export default HeroAmbientes
