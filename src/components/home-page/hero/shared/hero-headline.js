import * as React from "react"

import { Span } from "@layouts/index"
import { Title } from "@typography/index"
import { HighlightTextLine1 } from "@decorative/index"
import { colorsTheme } from "@theme"

const HeroHeadline = () => {
  return (
    <>
      <Title
        as="h2"
        weight="300"
        color="orange"
        ls="5"
        ml="2"
        mb="4"
        mt="5"
        capitalize="uppercase"
      >
        Bem vindo a
      </Title>
      <Title
        as="h1"
        weight="800"
        color="orange"
        ls="3"
        mb="4"
        size={{ laptop: 74, tablet: 74 }}
      >
        LOJAS GAUCHA
      </Title>
      <Title
        as="h2"
        weight={{ mobile: 600, laptop: 400 }}
        color="blue"
        mb="30"
        ml="2"
        ls="1"
        size={{ laptop: 48, tablet: 48 }}
        newLine
      >
        por 15 anos, procuramos {"\n"}soluções
        <HighlightTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
          h="10"
          w="105%"
          top="60%"
          hFixed
          wFixed
          newLine
        >
          {" "}
          para sua casa
        </HighlightTextLine1>
        {"\n"}ao melhor preço
        {/** TODO: the line is not visible at the bottom of text 
        <HighlightTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
          h="10"
          w="105%"
          newLine
        >
          {" "}
          {"\n"}ao melhor preço
        </HighlightTextLine1>
        */}
      </Title>
    </>
  )
}

export default HeroHeadline
