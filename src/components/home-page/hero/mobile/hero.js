import * as React from "react"

import { GridContainer } from "@layouts/index"

import { useViewportInfo } from "@hooks/index"

import HeroHeadline from "./hero-headline"
import HeroAmbientes from "./hero-ambientes"

const Hero = () => {
  const { device } = useViewportInfo()

  return (
    <>
      {device === "mobile" && (
        <GridContainer rows="0.5fr 1fr" columns="1fr" h100 w100 pl="16" pr="16">
          <HeroHeadline />
          <HeroAmbientes />
        </GridContainer>
      )}
    </>
  )
}

export default Hero
