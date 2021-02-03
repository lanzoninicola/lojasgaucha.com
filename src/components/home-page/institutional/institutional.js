import * as React from "react"
import InstitutionalHeader from "./institutional-headline"
import { GridContainer, FlexContainer } from "@layouts/index"
import { Box } from "@shape/index"
import StatsSmallBox from "./institutional-stats-smallbox"
import { Title } from "@typography/index"

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
      <GridContainer rows=".25fr 1fr" gap="8" stretchX h100>
        <Title
          as="h2"
          color="orange"
          weight="700"
          mt={{ min: "15px", max: "30px" }}
          mb="8"
        >
          Nossos serviços
        </Title>
        <GridContainer rows="1fr" columns="1fr 1fr 1fr" gap="8" stretchX h100>
          <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
            <p style={{ color: "white" }}>Em</p>
          </FlexContainer>
          <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
            <p style={{ color: "white" }}>Em</p>
          </FlexContainer>
          <FlexContainer column centerX stretchY $style={{ minWidth: "100%" }}>
            <p style={{ color: "white" }}>Em</p>
          </FlexContainer>
        </GridContainer>
      </GridContainer>
    </>
  )
}

export default Institutional
