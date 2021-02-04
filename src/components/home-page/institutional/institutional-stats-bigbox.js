import * as React from "react"
import { GridContainer } from "@layouts/index"
import { Box } from "@shape/index"
import { Text } from "@typography/index"

const StatsBigBox = () => {
  return (
    <Box bg="white" opacity="0.31" br="10" h100 w100>
      <GridContainer rows="1fr 1fr 1fr" columns="1fr" gap="12">
        <GridContainer rows="1fr" columns="1fr">
          <Text variant="primary" color="white" weight="400" size="15">
            Em
          </Text>
        </GridContainer>
        <GridContainer rows="1fr" columns="1fr 1fr" hAuto>
          <Text variant="primary" color="orange" weight="700" size="70">
            15
          </Text>
          <Text variant="primary" color="white" weight="700" size="15">
            anos de atividade
          </Text>
        </GridContainer>
        <GridContainer rows="1fr" columns="1fr">
          <Text variant="primary" color="white" weight="400" size="15">
            entregamos
          </Text>
        </GridContainer>
      </GridContainer>
    </Box>
  )
}

export default StatsBigBox
