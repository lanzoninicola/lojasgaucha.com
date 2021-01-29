import * as React from "react"
import PropTypes from "prop-types"
import { divIcon } from "leaflet"
import { Marker } from "react-leaflet"
import { isUndefined, isNotArray, error } from "@utils/index"

const MapMarker = React.forwardRef(
  (ref, { position, title, text, children }) => {
    const markerIcon = divIcon({ color: "red", border: "3px solid black" })

    console.log(position)

    return (
      <Marker
        icon={markerIcon ?? null}
        position={position}
        title={title ?? null}
        text={text ?? null}
      >
        {children}
      </Marker>
    )
  }
)

MapMarker.propTypes = {
  children: PropTypes.node.isRequired,
  position: (props, propName, componentName) => {
    if (isUndefined(props[propName])) {
      error(
        componentName,
        `
        ${propName} prop is required to place the marker in the correct location inside the map. 
        
        The "${propName}" is an array of latitude value and longitude value <[lat, lang]>`
      )
    }

    if (isNotArray(props[propName])) {
      error(
        componentName,
        `
            The "${propName}" is an array of latitude and longitude <[lat, lang]>`
      )
    }
  },
  title: PropTypes.string,
  text: PropTypes.string,
}

export default MapMarker
