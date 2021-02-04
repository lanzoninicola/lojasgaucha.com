import * as React from "react"
import InstitutionalHeader from "./institutional-headline"
import { GridContainer, FlexContainer } from "@layouts/index"
import { Box } from "@shape/index"
import StatsSmallBox from "./institutional-stats-smallbox"
import { Text } from "@typography/index"
import InstitutionalServices from "./institutional-services"

const Institutional = () => {
  return (
    <>
      <GridContainer rows=".25fr 1fr" gap="16" stretchX>
        <InstitutionalHeader />
        <GridContainer rows="1fr" columns="1fr 1fr" gap="8">
          <Box bg="white" opacity="0.31" br="10" h100 w100>
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
          </Box>
          <GridContainer rows="1fr 1fr 1fr 1fr" columns="1fr" gap="8">
            <StatsSmallBox number="320" description="camas" />
            <StatsSmallBox number="320" description="camas" />
            <StatsSmallBox number="320" description="camas" />
            <StatsSmallBox number="320" description="camas" />
          </GridContainer>
        </GridContainer>
        <GridContainer rows="1fr" columns="1fr" gap="8">
          <Box bg="white" opacity="0.31" br="10" w100>
            <GridContainer rows="1fr" columns="1fr">
              <p style={{ color: "white" }}>Em</p>
            </GridContainer>
          </Box>
        </GridContainer>
        <GridContainer rows="1fr" columns="1fr" gap="8">
          <Box bg="white" opacity="0.31" br="10" w100>
            <GridContainer rows="1fr" columns="1fr">
              <p style={{ color: "white" }}>Em</p>
            </GridContainer>
          </Box>
        </GridContainer>
      </GridContainer>
      <InstitutionalServices />
    </>
  )
}

export default Institutional
