import * as React from "react"
import { FlexContainer } from "@layouts/index"
import { Title, Text } from "@typography/index"

const InstitutionalHeader = () => {
  return (
    <FlexContainer columns left>
      <>
        <Title
          as="h2"
          color="orange"
          weight="700"
          mt={{ min: "15px", max: "30px" }}
          mb="8"
        >
          Porque nós
        </Title>
        <Text variant="secondary" weight="300" color="white">
          Lojas Gaucha é uma empresa familiar que se esforça todos os dias para
          oferecer soluções de móveis para a casa, aos melhores preços, às
          famílias de nossa região.
        </Text>
      </>
    </FlexContainer>
  )
}

export default InstitutionalHeader
