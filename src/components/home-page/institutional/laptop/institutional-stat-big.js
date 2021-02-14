import * as React from "react"

import { GridFixedContainer } from "@layouts/index"
import { Text } from "@typography"

import InstitutionalTitles from "./institutional-titles"

const InstitutionalStatBig = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX>
        <InstitutionalTitles>Em</InstitutionalTitles>
        <GridFixedContainer rows="1fr" columns="1fr .25fr" hAuto top centerY>
          <Text color="blue" size={{ laptop: 240, tablet: 120 }}>
            15
          </Text>
          <Text color="blue" size="25" pt="24">
            anos de atividade
          </Text>
        </GridFixedContainer>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalStatBig
