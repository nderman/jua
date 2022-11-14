import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Map: React.FunctionComponent = () => {
  return (
    <div className="App">
    <div style={{ height: '100%', width: '90%', padding: '20px', margin: '20px' }}>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: '800px' }}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
    </div>
    </div>
    )
  }
  
  export default Map
  