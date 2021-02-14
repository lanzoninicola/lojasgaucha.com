import * as React from "react"

import { GridFixedContainer } from "@layouts/index"
import { ButtonPrimaryBlue } from "@buttons"
import InstitutionalTitles from "./institutional-titles"

const InstitutionalCta = () => {
  return (
    <>
      <GridFixedContainer columns="1fr" rAuto centerX>
        <InstitutionalTitles newLine center>
          vem a visitar nossa loja {"\n"}clique e agenda um apuntamento
        </InstitutionalTitles>

        <ButtonPrimaryBlue>Agenda um apuntamento</ButtonPrimaryBlue>
      </GridFixedContainer>
    </>
  )
}

export default InstitutionalCta
