import * as React from "react"
import { Map, CompanyMarker } from "@maps/index"

function StoreMap() {
  return (
    <Map center={[-26.212, -52.67]} zoom={14}>
      <CompanyMarker />
    </Map>
  )
}

export default StoreMap
