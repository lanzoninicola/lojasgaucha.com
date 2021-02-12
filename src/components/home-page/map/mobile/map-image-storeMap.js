import * as React from "react"
import { Map, CompanyMarker } from "@maps/index"
import { GridFixedContainer } from "../../../../styling/layouts"

function StoreMap() {
  return (
    <GridFixedContainer h="200">
      <Map center={[-26.212, -52.67]} zoom={14}>
        <CompanyMarker />
      </Map>
    </GridFixedContainer>
  )
}

export default StoreMap
