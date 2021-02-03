import * as React from "react"
import { GridContainer, FlexContainer } from "@layouts/index"
import { Box } from "@shape/index"
import { Title } from "@typography/index"

const InstitutionalServices = () => {
  return (
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
  )
}

export default InstitutionalServices
