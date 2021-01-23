import * as React from "react"
import styled from "styled-components"

import { FlexContainer } from "../../../../styling/layouts/inner"
import { Title } from "../../../../styling/typography/index"
import colorsTheme from "../../../../styling/_theme/colorsTheme"

const Span = styled.span`
  position: relative;
`

const HighlightTextLine1 = styled.div`
  position: absolute;
  top: 60%;
  left: 10%;
  height: 10px;
  width: 105%;
  max-width: 440px;
  margin-left: -8%;
  transform: rotate(var(--decoration-angle-2));
  z-index: -1;

  background: ${() =>
    colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })};
`

const HighlightTextLine2 = styled.div`
  position: absolute;
  top: 60%;
  left: 10%;
  height: 10px;
  width: 105%;
  max-width: 440px;
  margin-left: -8%;
  transform: rotate(var(--decoration-angle-2));
  z-index: -1;

  background: ${() =>
    colorsTheme("green", { colorUnit: "rgba", opacity: 0.7 })};
`

const HeroHeadline = () => {
  return (
    <FlexContainer column>
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
        Bem vindo na
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
        LOJAS GAUCHA
      </Title>
      <Title
        as="h2"
        variant="secondary"
        size="20"
        lh="24"
        weight="600"
        color="blue"
        mb="30px"
        ml="2px"
        ls="1px"
        $style={{
          // position: "relative",
          width: "280px",
        }}
      >
        por 15 anos, procuramos soluções{" "}
        <Span>
          para sua casa
          <HighlightTextLine1 />
        </Span>
        <Span>
          ao melhor preço
          <HighlightTextLine2 />
        </Span>
      </Title>
    </FlexContainer>
  )
}

export default HeroHeadline
