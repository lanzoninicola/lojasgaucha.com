import * as React from "react"

import { GridFixedContainer, GridFluidContainer } from "@layouts"
import StoreLocationContent from "./store-location-content"
import StoreLocationMap from "../shared/store-location-map"

const StoreLocation = () => {
  return (
    <GridFixedContainer
      as="section"
      columns="1fr"
      rows="1fr"
      gap="0"
      mt="36"
      mb="36"
    >
      <GridFluidContainer>
        <StoreLocationContent />
        <StoreLocationMap />
      </GridFluidContainer>
    </GridFixedContainer>
  )
}

export default StoreLocation
