import React from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'
import FileUploadSingle from './FileUploadSingle'

const Map: React.FunctionComponent = () => {
  const featureGroupRef = React.createRef<any>()

  const handleUploadFile = (fileData: any): void => {
    L.geoJSON(fileData).eachLayer((layer: any) => {
      featureGroupRef.current.addLayer(layer)
    })
  }

  return (
    <div className="App">
      <div style={{ height: '100%', width: '90%', padding: '20px', margin: '20px' }}>
        <MapContainer center={[-33, 20]} zoom={5} scrollWheelZoom={true} style={{ height: '800px' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FeatureGroup ref={featureGroupRef as any}>
            <EditControl
              position="topright"
              draw={{
                rectangle: true
              }}
            />
          </FeatureGroup>
        </MapContainer>
        <FileUploadSingle handleUploadFile={handleUploadFile} />
      </div>
    </div>
  )
}

export default Map
