import * as React from "react"
import { ThemeContext } from "styled-components"

import { GridFluidContainer, GridFixedContainer, FlexContainer } from "@layouts"
import { Title, Text } from "@typography"
import { colorsTheme } from "@theme"
import { Box } from "@shape"

const Claims = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = themeContext?.viewport

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
            pl="60"
            pr="60"
          >
            <GridFixedContainer columns="0.1fr 1fr" rows="1fr" centerY>
              <Box bg="green" w="17" h="17" />
              <Title as="h3" color="orange" ls="4" uppercase>
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
            pl="60"
            pr="60"
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
            pl="60"
            pr="60"
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
