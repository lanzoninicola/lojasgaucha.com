import * as React from "react"
import { ThemeContext } from "styled-components"

import {
  GridFluidContainer,
  GridFixedContainer,
  FlexContainer,
} from "@layouts/index"

import HeroHeadline from "./hero-headline"
import HeroAmbientes from "../mobile/hero-ambientes"

const Hero = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = themeContext?.viewport

  return (
    <>
      {(device === "laptop" || device === "tablet") && (
        <GridFluidContainer
          as="section"
          h="780"
          pl={{ laptop: 176, tablet: 72 }}
          pr={{ tablet: 72 }}
        >
          <FlexContainer column centerX>
            <HeroHeadline centerX />
          </FlexContainer>
          <FlexContainer column centerX>
            Anim labore mollit pariatur officia. Incididunt mollit pariatur
            consectetur do commodo incididunt. Anim sint anim occaecat est minim
            sint consequat duis veniam in in. Sunt dolor commodo incididunt ea
            magna tempor. Irure incididunt eiusmod voluptate amet labore dolore
            ea eiusmod. Fugiat fugiat in do veniam. Fugiat eu qui elit cillum
            deserunt. Aute dolor nulla do ut sunt ea irure commodo ad officia
            adipisicing minim. Aliquip eu ullamco quis labore ad consequat
            eiusmod ad laboris tempor ea laboris. Id irure incididunt ea
            adipisicing esse mollit duis elit fugiat. Exercitation excepteur
            deserunt et aliquip.
          </FlexContainer>
        </GridFluidContainer>
      )}
      {device === "mobile" && (
        <GridFixedContainer
          as="section"
          rows="0.5fr 1fr"
          columns="1fr"
          h100
          w100
          pl="16"
          pr="16"
        >
          <FlexContainer column>
            <HeroHeadline mt="20" />
          </FlexContainer>
          <HeroAmbientes />
        </GridFixedContainer>
      )}
    </>
  )
}

export default Hero
