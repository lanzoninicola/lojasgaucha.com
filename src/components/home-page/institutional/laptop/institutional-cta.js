import * as React from "react"

import { GridFixedContainer } from "@layouts/index"
import { Title } from "@typography"
import { ButtonPrimaryBlue } from "@buttons"
import { colorsTheme } from "@theme"
import { HighlightTextLine1 } from "@decorative"

const InstitutionalCta = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX>
        <Title as="h3" weight="600" size={{ laptop: 56 }} color="white">
          porque de móveis,
          <HighlightTextLine1 color={colorsTheme("blue")}>
            nos entendemos!
          </HighlightTextLine1>
        </Title>

        <ButtonPrimaryBlue>Agenda um apuntamento</ButtonPrimaryBlue>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalCta
