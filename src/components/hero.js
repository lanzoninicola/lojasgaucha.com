import * as React from "react"
import styled from "styled-components"

import { FlexContainer, GridContainer } from "../styling/layouts/inner"
import Image from "./image"
import { Title, SmallText } from "../styling/typography/index"
import HeroImageGallery from "./heroImageGallery"
import { Button } from "../styling/button/index"

import useResponsiveSize from "../styling/_hooks/useResponsiveSize"
import useViewportInfo from "../styling/_hooks/useViewportInfo"

const HeroContainer = styled(GridContainer)`
  height: ${({ theme, vh, vw }) => {
    console.log(
      "HeroContainer - vh, navbarHeight",
      vh,
      theme?.navbar?.mobile?.layout?.height
    )
    if (vw < 1024) {
      return `${vh - theme?.navbar?.mobile?.layout?.height}px`
    }

    return 0`${vh - theme.layout.header.height.value}px`
  }};
`

const Hero = () => {
  const { width, height } = useViewportInfo()

  return (
    <HeroContainer as="section" vw={width} vh={height}>
      {/* {width < 1024 && <HeroImageGallery />} */}

      <FlexContainer
        column
        $style={{
          paddingLeft: useResponsiveSize({
            min: 16,
            max: 122,
          }),
          paddingRight: useResponsiveSize({
            min: 16,
            max: 50,
          }),
        }}
      >
        <Title
          as="h1"
          weight="300"
          color="orange"
          $style={{
            marginBottom: useResponsiveSize({
              min: 5,
              max: 16,
            }),
          }}
        >
          Bem vindo na
        </Title>
        <Title
          as="h1"
          weight="700"
          color="orange"
          size={{ min: 37, max: 74 }}
          $style={{
            marginBottom: useResponsiveSize({
              min: 5,
              max: 16,
            }),
          }}
        >
          LOJAS GAUCHA
        </Title>
        <Title
          as="h2"
          weight="600"
          color="blue"
          $style={{
            marginBottom: useResponsiveSize({
              min: 30,
              max: 75,
            }),
          }}
        >
          por 15 anos, procuramos soluções <span>para sua casa</span>
          <span> ao melhor preço</span>
        </Title>

        <FlexContainer
          column
          centerY={width < 1024}
          $style={{ height: "auto" }}
        >
          <SmallText
            variant="secondary"
            weight="600"
            color="orange"
            align="center"
            $style={{
              marginBottom: useResponsiveSize({
                min: 15,
                max: 45,
              }),
            }}
          >
            VEM A VISTAR A NOSSA LOJA <br />
            CLIQUE E AGENDA UM APUNTAMENTO
          </SmallText>

          <Button variant="primary" color="orange">
            AGENDAMENTO
          </Button>
        </FlexContainer>
      </FlexContainer>

      {width > 1024 && (
        <GridContainer>
          <Image />
          <Image />
          <Image />
        </GridContainer>
      )}
    </HeroContainer>
  )
}

export default Hero
