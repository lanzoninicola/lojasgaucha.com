import * as React from "react"

import { FlexContainer } from "../../../../styling/layouts/inner"
import { Title } from "../../../../styling/typography/index"
import HighlitTextLine1 from "../../../../styling/decorative/highlightText/highlight-text-line1"
import colorsTheme from "../../../../styling/_theme/colorsTheme"

const HeroHeadline = () => {
  return (
    <FlexContainer column mt="20">
      <Title
        as="h1"
        weight="700"
        color="orange"
        size="16"
        lh="18"
        ls="5.5px"
        ml="2px"
        mb="4px"
        mt="5px"
        capitalize="uppercase"
      >
        Bem vindo nafdsafda
      </Title>
      <Title
        as="h1"
        weight="800"
        color="orange"
        size="36"
        ls="3px"
        lh="38px"
        mb="4px"
      >
        LOJAS GAUCHAAA
      </Title>
      <Title
        as="h2"
        variant="secondary"
        size="24"
        lh="28"
        weight="600"
        color="blue"
        mb="30px"
        ml="2px"
        ls="1px"
        $style={{
          width: "350px",
        }}
      >
        por 15 anos, procuramos soluções{" "}
        <HighlitTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
        >
          para sua casa
        </HighlitTextLine1>{" "}
        <HighlitTextLine1
          color={colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })}
        >
          ao melhor preço
        </HighlitTextLine1>
      </Title>
    </FlexContainer>
  )
}

export default HeroHeadline
