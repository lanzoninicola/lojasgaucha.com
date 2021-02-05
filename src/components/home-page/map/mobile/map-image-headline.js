import * as React from "react"

import { GridContainer } from "@layouts/index"
import { Text } from "@typography/index"
import { MapAppsNavbar } from "@maps/index"

const MapImageHeadline = () => {
  return (
    <GridContainer rows="1fr" columns="1fr 1fr" centerY>
      <Text weight="400" color="white" capitalize="uppercase">
        Usa o seu aplicativo favorito
      </Text>
      <MapAppsNavbar size="48" hideText stretch="8" />
    </GridContainer>
  )
}

export default MapImageHeadline
