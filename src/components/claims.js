import * as React from "react"
import { GridContainer, FlexContainer } from "../styling/layouts/index"
import Title from "../components/title/title"
import Text from "./text/text"

const Claims = () => {
  return (
    <GridContainer as="section">
      <FlexContainer column>
        <Title is="h3" variant="primary">
          Qualidade
        </Title>
        <Text is="body">
          Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
          consequat commodo adipisicing aute commodo occaecat laborum veniam.
          Aliquip enim cillum adipisicing aliquip. Fugiat magna eiusmod non
          eiusmod voluptate enim magna duis reprehenderit.
        </Text>
      </FlexContainer>
      <FlexContainer column>
        <Title is="h3" variant="primary">
          Validade
        </Title>
        <Text is="body">
          Excepteur Lorem do tempor occaecat proident Lorem id. Nulla anim
          consequat commodo adipisicing aute commodo occaecat laborum veniam.
          Aliquip enim cillum adipisicing aliquip. Fugiat magna eiusmod non
          eiusmod voluptate enim magna duis reprehenderit.
        </Text>
      </FlexContainer>
      <FlexContainer column>
        <Title is="h3" variant="primary">
          Variedade
        </Title>
        <Text is="body">
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
