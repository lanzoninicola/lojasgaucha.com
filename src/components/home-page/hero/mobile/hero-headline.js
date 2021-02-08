import * as React from "react"

import { FlexContainer } from "@layouts/index"
import { Title } from "@typography/index"
import { HighlightTextLine1 } from "@decorative/index"
import { colorsTheme } from "@theme/index"

const HeroHeadline = () => {
  return (
    <FlexContainer column mt="20">
      <Title
        as="h1"
        weight="700"
        color="orange"
        // size="16"
        ls="5.5px"
        ml="2px"
        mb="4px"
        mt="5px"
        capitalize="uppercase"
      >
        Bem vindo a
      </Title>
      <Title as="h1" weight="800" color="orange" ls="3px" mb="4px">
        LOJAS GAUCHA
      </Title>
      <Title as="h2" weight="600" color="blue" mb="30px" ml="2px" ls="1px">
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
    </FlexContainer>
  )
}

export default HeroHeadline
