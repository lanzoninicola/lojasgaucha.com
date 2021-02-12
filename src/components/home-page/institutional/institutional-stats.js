import * as React from "react"
import { GridFixedContainer } from "@layouts/index"
import { TextBox } from "@layouts"
import StatsBigBox from "./institutional-stats-bigbox"
import StatsSmallBoxes from "./institutional-stats-smallboxes"
import { Text } from "@typography/index"

const InstitutionalStats = () => {
  return (
    <>
      <GridFixedContainer rows="1fr" columns="1fr 1fr" gap="8">
        <StatsBigBox />
        <StatsSmallBoxes />
      </GridFixedContainer>
      <GridFixedContainer rows="1fr" columns="1fr">
        <TextBox bg="white" opacity="0.31" br="10" w100>
          <GridFixedContainer rows="1fr" columns="1fr 1fr" h100>
            <p style={{ color: "white" }}>Em</p>
            <Text color="white" weight="400" size="18">
              e fizemos muitas famílias felizes
            </Text>
          </GridFixedContainer>
        </TextBox>
      </GridFixedContainer>
      <GridFixedContainer rows="1fr" columns="1fr">
        <TextBox bg="orange" opacity="0.31" br="10" w100 h100>
          <GridFixedContainer rows="1fr" columns="1fr">
            <Text color="white" weight="400" size="18">
              porque de móveis, nos entendemos!
            </Text>
          </GridFixedContainer>
        </TextBox>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalStats
