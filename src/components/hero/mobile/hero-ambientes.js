import * as React from "react"

import { GridContainer } from "../../../styling/layouts/inner"
import HeroAmbientesHeadline from "./hero-ambientes-headline"
import HeroAmbientesCarousel from "./hero-ambientes-carousel"

const HeroAmbientes = () => {
  return (
    <GridContainer id="heroAmbientes" rows="0.1fr 1fr" columns="1" h100>
      <HeroAmbientesHeadline />
      <HeroAmbientesCarousel />
    </GridContainer>
  )
}

export default HeroAmbientes
