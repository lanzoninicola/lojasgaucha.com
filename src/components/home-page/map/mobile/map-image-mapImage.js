import * as React from "react"
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import { log } from "@utils/index"

//TODO: adding store offering in tooltip map
//TODO: improve fetch with react-query???

function SimpleMap() {
  //   const [storeLatLang, setStoreLatLang] = React.useState([])
  //   React.useEffect(() => {
  //     // If the user goes back to home before map has loaded, the Map component will unmount
  //     // but since fetch cannot be cancelled, react will try to setSate on an unmounted component
  //     // when the fetch Promise resolves
  //     // This throws memory leak error so isComponentSubscribedToPromise is used as a flag
  //     // to check if the component was unmounted before setting state
  //     // and setStoreLatLang is not called if Map component has unmounted
  //     let isComponentSubscribedToPromise = true
  //     if (isComponentSubscribedToPromise) {
  //       fetch(`https://restcountries.eu/rest/v2/alpha/bra`)
  //         .then(resp => resp.json())
  //         .then(data => {
  //           if (isComponentSubscribedToPromise) setStoreLatLang(data)
  //         })
  //         .catch(err => console.error(err))
  //     }
  //     return () => {
  //       isComponentSubscribedToPromise = false
  //     }
  //   }, [])

  const center = [-26.22606, -52.67112]

  return (
    <MapContainer
      center={center}
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
      <Marker
        key={"Brazil"}
        position={[-26.22606, -52.67112]}
        color="royalblue"
        title="<Marker> - title prop - !!!!! LOJAS GAUCHA NAME !!!!!!"
        text="<Marker> - text prop - Addresss or something else"
      >
        <Tooltip>{"<Tooltip> Marker child component"}</Tooltip>
        <Popup>{"<Popup> Marker child component"}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default SimpleMap
