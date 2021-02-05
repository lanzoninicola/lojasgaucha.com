import * as React from "react"
import { GridContainer } from "@layouts/index"
import { Box } from "@shape/index"
import { Text } from "@typography/index"

const StatsBigBox = () => {
  return (
    <Box bg="white" opacity="0.31" br="10" h100 w100>
      <GridContainer rAuto columns="1fr" centerY>
        <GridContainer rows="1fr" columns="1fr">
          <Text color="white">Em</Text>
        </GridContainer>
        <GridContainer rows="1fr" columns=".75fr 1fr" hAuto>
          <Text color="orange" size="60">
            15
          </Text>
          <Text color="white">anos de atividade</Text>
        </GridContainer>
        <GridContainer rows="1fr" columns="1fr">
          <Text color="white">entregamos</Text>
        </GridContainer>
      </GridContainer>
    </Box>
  )
}

export default StatsBigBox
