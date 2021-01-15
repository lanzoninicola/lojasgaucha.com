import * as React from "react"

import { FlexContainer } from "../../../styling/layouts/inner"
import { Title } from "../../../styling/typography/index"

const HeroHeadline = () => {
  return (
    <FlexContainer column>
      <Title
        as="h1"
        weight="700"
        color="orange"
        size="22"
        lh="26"
        ls="5.5px"
        mb="4px"
        mt="5px"
        capitalize="uppercase"
      >
        Bem vindo na
      </Title>
      <Title
        as="h1"
        weight="700"
        color="orange"
        size="26"
        ls="2px"
        lh="26px"
        mb="6px"
      >
        LOJAS GAUCHA
      </Title>
      <Title
        as="h2"
        size="20"
        lh="24"
        weight="400"
        color="blue"
        mb="30px"
        $style={{
          width: "240px",
        }}
      >
        por 15 anos, procuramos soluções <span>para sua casa</span>
        <span> ao melhor preço</span>
      </Title>
    </FlexContainer>
  )
}

export default HeroHeadline
