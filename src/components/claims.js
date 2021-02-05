import * as React from "react"
import { GridContainer, FlexContainer } from "../styling/layouts/index"
import Title from "../components/title/title"
import Text from "./text/text"

const Claims = () => {
  return (
    <GridContainer as="section">
      <FlexContainer column>
        <Title as="h3">Qualidade</Title>
        <Text as="body">
          Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
          consequat commodo adipisicing aute commodo occaecat laborum veniam.
          Aliquip enim cillum adipisicing aliquip. Fugiat magna eiusmod non
          eiusmod voluptate enim magna duis reprehenderit.
        </Text>
      </FlexContainer>
      <FlexContainer column>
        <Title as="h3">Validade</Title>
        <Text as="body">
          Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
          consequat commodo adipisicing aute commodo occaecat laborum veniam.
          Aliquip enim cillum adipisicing aliquip. Fugiat magna eiusmod non
          eiusmod voluptate enim magna duis reprehenderit.
        </Text>
      </FlexContainer>
      <FlexContainer column>
        <Title as="h3">Variedade</Title>
        <Text as="body">
          Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
          consequat commodo adipisicing aute commodo occaecat laborum veniam.
          Aliquip enim cillum adipisicing aliquip. Fugiat magna eiusmod non
          eiusmod voluptate enim magna duis reprehenderit.
        </Text>
      </FlexContainer>
    </GridContainer>
  )
}

export default Claims
