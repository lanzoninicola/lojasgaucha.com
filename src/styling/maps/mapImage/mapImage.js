import * as React from "react"
import { ThemeContext } from "styled-components"
import { MapContainer, TileLayer } from "react-leaflet"

//TODO: adding "store promo" in tooltip map

function MapImage({ center, children, ...props }) {
  const themeContext = React.useContext(ThemeContext)
  const companyInfo = themeContext?.company

  const { maps } = companyInfo

  const companyCoordinates = [maps?.latitude, maps?.longitude]

  return (
    <MapContainer
      center={center ?? companyCoordinates}
      zoom={15}
      minZoom={1}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer
        attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}

export default MapImage
