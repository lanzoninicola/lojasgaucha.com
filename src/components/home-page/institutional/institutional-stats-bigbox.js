import * as React from "react"
import { GridFixedContainer } from "@layouts/index"
import { TextBox } from "@layouts"
import { Text } from "@typography/index"

const StatsBigBox = () => {
  return (
    <TextBox bg="white" opacity="0.31" br="10" h100 w100>
      <GridFixedContainer rAuto columns="1fr" centerY>
        <GridFixedContainer rows="1fr" columns="1fr">
          <Text color="white">Em</Text>
        </GridFixedContainer>
        <GridFixedContainer rows="1fr" columns=".75fr 1fr" hAuto>
          <Text color="orange" size="60">
            15
          </Text>
          <Text color="white">anos de atividade</Text>
        </GridFixedContainer>
        <GridFixedContainer rows="1fr" columns="1fr">
          <Text color="white">entregamos</Text>
        </GridFixedContainer>
      </GridFixedContainer>
    </TextBox>
  )
}

export default StatsBigBox
