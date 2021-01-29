import * as React from "react"

import { FlexContainer } from "@layouts/index"
import { SmallText } from "@typography/index"
import { MapAppsNavbar } from "@maps/index"

const MapImageHeadline = () => {
  return (
    <FlexContainer row stretchXL centerY hAuto mb="10">
      <SmallText
        weight="400"
        size="14"
        lh="18"
        color="white"
        capitalize="uppercase"
        $style={{
          width: "120px",
        }}
      >
        Usa o seu aplicativo favorito
      </SmallText>
      <MapAppsNavbar size="48" hideText stretch="8" />
    </FlexContainer>
  )
}

export default MapImageHeadline
