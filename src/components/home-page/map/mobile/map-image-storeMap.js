import * as React from "react"
import { Map, CompanyMarker } from "@maps/index"
import { GridContainer } from "../../../../styling/layouts"

function StoreMap() {
  return (
    <GridContainer h="200">
      <Map center={[-26.212, -52.67]} zoom={14}>
        <CompanyMarker />
      </Map>
    </GridContainer>
  )
}

export default StoreMap
