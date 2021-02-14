import * as React from "react"

import { GridFluidContainer, GridFixedContainer } from "@layouts"
import { useViewportInfo } from "@hooks"
import { Title, Text } from "@typography"
import { colorsTheme } from "@theme"
import { Box } from "@shape"

const Claims = () => {
  const { device } = useViewportInfo()
  return (
    <>
      {(device === "laptop" || device === "tablet") && (
        <GridFluidContainer
          as="section"
          pl={{ laptop: 176, tablet: 72 }}
          pr={{ laptop: 176, tablet: 72 }}
          bg={colorsTheme("blue")}
          centerY
          h="300"
          cWidth="200"
        >
          <GridFixedContainer
            columns="1fr"
            rows="0.25fr 1fr"
            gap="16"
            pl={{ laptop: 60, tablet: 30 }}
            pr={{ laptop: 60, tablet: 30 }}
          >
            <GridFixedContainer columns="0.1fr 1fr" rows="1fr" centerY>
              <Box bg="green" w="17" h="17" />
              <Title
                as="h3"
                color="orange"
                ls="4"
                uppercase
                size={{ tablet: 24 }}
              >
                Qualidade
              </Title>
            </GridFixedContainer>
            <Text color="white" weight="300" lh={{ laptop: 28 }}>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam.
            </Text>
          </GridFixedContainer>

          <GridFixedContainer
            columns="1fr"
            rows="0.25fr 1fr"
            gap="16"
            pl={{ laptop: 60, tablet: 30 }}
            pr={{ laptop: 60, tablet: 30 }}
          >
            <GridFixedContainer columns="0.1fr 1fr" rows="1fr" centerY>
              <Box bg="green" w="17" h="17" />
              <Title as="h3" color="orange" ls="4" uppercase>
                Validade
              </Title>
            </GridFixedContainer>
            <Text color="white" weight="300" lh={{ laptop: 28 }}>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam.
            </Text>
          </GridFixedContainer>
          <GridFixedContainer
            columns="1fr"
            rows="0.25fr 1fr"
            gap="16"
            pl={{ laptop: 60, tablet: 30 }}
            pr={{ laptop: 60, tablet: 30 }}
          >
            <GridFixedContainer columns="0.1fr 1fr" rows="1fr" centerY>
              <Box bg="green" w="17" h="17" />
              <Title as="h3" color="orange" ls="4" uppercase>
                Variedade
              </Title>
            </GridFixedContainer>
            <Text color="white" weight="300" lh={{ laptop: 28 }}>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam.
            </Text>
          </GridFixedContainer>
        </GridFluidContainer>
      )}
    </>
  )
}

export default Claims
