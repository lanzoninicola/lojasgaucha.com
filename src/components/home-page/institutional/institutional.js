import * as React from "react"
import InstitutionalHeader from "./institutional-headline"
import { GridContainer, FlexContainer } from "@layouts/index"
import { Box } from "@shape/index"
import StatsSmallBox from "./institutional-stats-smallbox"
import { Title } from "@typography/index"
import InstitutionalServices from "./institutional-services"

const Institutional = () => {
  return (
    <>
      <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
        <InstitutionalHeader />
        <GridContainer rows="1fr" columns="1fr 1fr" gap="8">
          <Box bg="white" opacity="0.31" br="10" w100>
            <GridContainer rows="1fr" columns="1fr">
              <p style={{ color: "white" }}>Em</p>
            </GridContainer>
            <GridContainer rows="1fr" columns="1fr 1fr">
              <p style={{ color: "white" }}>15</p>
              <p style={{ color: "white" }}>anos de atividade</p>
            </GridContainer>
            <GridContainer rows="1fr" columns="1fr">
              <p style={{ color: "white" }}>entregamos</p>
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
