import * as React from "react"
import { ThemeContext } from "styled-components"

import { GridContainer, FlexContainer } from "@layouts/index"

import HeroHeadline from "../shared/hero-headline"
import HeroAmbientes from "./hero-ambientes"

const Hero = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = themeContext?.viewport

  return (
    <>
      {(device === "laptop" || device === "tablet") && (
        <GridContainer h="780" w100 pl={{ laptop: 180, tablet: 16 }}>
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
        </GridContainer>
      )}
      {device === "mobile" && (
        <GridContainer rows="0.5fr 1fr" columns="1fr" h100 w100 pl="16" pr="16">
          <FlexContainer column>
            <HeroHeadline mt="20" />
          </FlexContainer>
          <HeroAmbientes />
        </GridContainer>
      )}
    </>
  )
}

export default Hero
