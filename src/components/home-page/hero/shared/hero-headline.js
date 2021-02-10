import * as React from "react"

import { Title } from "@typography/index"
import { HighlightTextLine1 } from "@decorative/index"
import { colorsTheme } from "@theme/index"

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
      <Title as="h1" weight="800" color="orange" ls="3" mb="4">
        LOJAS GAUCHA
      </Title>
      <Title as="h2" weight="600" color="blue" mb="30" ml="2" ls="1">
        por 15 anos, procuramos soluções{" "}
        <HighlightTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
        >
          para sua casa
        </HighlightTextLine1>
        {/** TODO: the line is not visible at the bottom of text */}
        <HighlightTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
          newLine
        >
          {"\n"}ao melhor preço
        </HighlightTextLine1>
      </Title>
    </>
  )
}

export default HeroHeadline
