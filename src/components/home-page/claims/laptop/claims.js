import * as React from "react"
import { ThemeContext } from "styled-components"

import { GridContainer, FlexContainer } from "@layouts"
import { Title, Text } from "@typography"
import { colorsTheme } from "@theme"

const Claims = () => {
  const themeContext = React.useContext(ThemeContext)
  const { device } = themeContext?.viewport

  return (
    <>
      {(device === "laptop" || device === "tablet") && (
        <GridContainer
          as="section"
          // columns="1fr 1fr 1fr"
          ml={{ laptop: 176, tablet: 72 }}
          mr={{ laptop: 176, tablet: 72 }}
          bg={colorsTheme("blue")}
          gap="48"
        >
          <FlexContainer column>
            <Title as="h3">Qualidade</Title>
            <Text>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam. Aliquip enim cillum adipisicing aliquip. Fugiat magna
              eiusmod non eiusmod voluptate enim magna duis reprehenderit.
            </Text>
          </FlexContainer>
          <FlexContainer column>
            <Title as="h3">Validade</Title>
            <Text>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam. Aliquip enim cillum adipisicing aliquip. Fugiat magna
              eiusmod non eiusmod voluptate enim magna duis reprehenderit.
            </Text>
          </FlexContainer>
          <FlexContainer column>
            <Title as="h3">Variedade</Title>
            <Text>
              Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
              consequat commodo adipisicing aute commodo occaecat laborum
              veniam. Aliquip enim cillum adipisicing aliquip. Fugiat magna
              eiusmod non eiusmod voluptate enim magna duis reprehenderit.
            </Text>
          </FlexContainer>
        </GridContainer>
      )}
    </>
  )
}

export default Claims
