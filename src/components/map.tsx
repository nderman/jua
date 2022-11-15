import React from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'
import FileUploadDownload from './FileUploadDownload/FileUploadDownload'
import { saveAs } from 'file-saver'

const Map: React.FunctionComponent = () => {
  const featureGroupRef = React.createRef<any>()

  const handleUploadFile = (fileData: any): void => {
    L.geoJSON(fileData).eachLayer((layer: L.Layer) => {
      featureGroupRef.current.addLayer(layer)
    })
  }

  const handleSaveFile = (filename: string): void => {
    console.log(featureGroupRef.current.toGeoJSON())
    const str = JSON.stringify(featureGroupRef.current.toGeoJSON())
    const bytes = new TextEncoder().encode(str)
    const blob = new Blob([bytes], {
      type: 'application/json;charset=utf-8'
    })
    saveAs(blob, filename)
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
        <FileUploadDownload handleSaveFile={handleSaveFile} handleUploadFile={handleUploadFile} />
      </div>
    </div>
  )
}

export default Map
