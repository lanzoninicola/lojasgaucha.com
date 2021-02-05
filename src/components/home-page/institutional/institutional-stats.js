import * as React from "react"
import { GridContainer } from "@layouts/index"
import { Box } from "@shape/index"
import StatsBigBox from "./institutional-stats-bigbox"
import StatsSmallBoxes from "./institutional-stats-smallboxes"
import { Text } from "@typography/index"

const InstitutionalStats = () => {
  return (
    <>
      <GridContainer rows="1fr" columns="1fr 1fr" gap="8">
        <StatsBigBox />
        <StatsSmallBoxes />
      </GridContainer>
      <GridContainer rows="1fr" columns="1fr">
        <Box bg="white" opacity="0.31" br="10" w100>
          <GridContainer rows="1fr" columns="1fr 1fr" h100>
            <p style={{ color: "white" }}>Em</p>
            <Text color="white" weight="400" size="18">
              e fizemos muitas famílias felizes
            </Text>
          </GridContainer>
        </Box>
      </GridContainer>
      <GridContainer rows="1fr" columns="1fr">
        <Box bg="orange" opacity="0.31" br="10" w100 h100>
          <GridContainer rows="1fr" columns="1fr">
            <Text color="white" weight="400" size="18">
              porque de móveis, nos entendemos!
            </Text>
          </GridContainer>
        </Box>
      </GridContainer>
    </>
  )
}

export default InstitutionalStats
