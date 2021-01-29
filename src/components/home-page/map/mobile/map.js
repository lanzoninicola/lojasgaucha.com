import * as React from "react"
import styled from "styled-components"

import { FlexContainer, GridContainer } from "../../../../styling/layouts/inner"
import MapHeader from "./map-headline"
import MapImageHeadline from "./map-image-headline"
import StoreMap from "./map-image-storeMap"

// TODO: integrate with GPS and showing to the user time to arrive to destination walking or car

const StyledMapInner = styled.div`
  height: 100%;
  width: auto;

  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.colors("whitegray", { colorUnit: "rgba", opacity: 0.3 })};
  padding: 16px;
`

const Map = () => {
  return (
    <GridContainer rows=".25fr 1fr" gap="16" stretchX h100>
      <MapHeader />
      <GridContainer rows="0.25fr 1fr" columns="1fr">
        <MapImageHeadline />
        <StoreMap />
      </GridContainer>
    </GridContainer>
  )
}

export default Map
