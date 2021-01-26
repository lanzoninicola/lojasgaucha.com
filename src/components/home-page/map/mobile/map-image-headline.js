import * as React from "react"

import { FlexContainer } from "../../../../styling/layouts/inner"
import { SmallText } from "../../../../styling/typography/index"
import { GoogleMapsNavLink } from "../../../../styling/maps/index"

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
      <GoogleMapsNavLink />
    </FlexContainer>
  )
}

export default MapImageHeadline
