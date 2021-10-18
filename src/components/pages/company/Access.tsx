import * as React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  height: 400,
  width: "100%",
}

const center = {
  lat: 35.69575,
  lng: 139.77521,
}

const position = {
  lat: 35.69587198435995,
  lng: 139.77533874603174,
}

const Access = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Access
