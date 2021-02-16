import * as React from "react"
import { Map, CompanyMarker } from "@maps/index"
import { GridFixedContainer } from "@layouts"
import { useViewportInfo } from "@hooks"

function StoreLocationMap() {
  const { device } = useViewportInfo()

  return (
    <GridFixedContainer
      columns="1fr"
      rows="1fr"
      h={{ laptop: 500, tablet: 200, mobile: 200 }}
    >
      <Map center={[-26.212, -52.67]} zoom={device === "mobile" ? "14" : "13"}>
        <CompanyMarker />
      </Map>
    </GridFixedContainer>
  )
}

export default StoreLocationMap
