import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

function RandomMap() {
  const [position, setPosition] = useState([51.505, -0.09])
  const [mapComponents, setMapComponents] = useState(null)

  useEffect(() => {
    // Dynamic import of react-leaflet components
    import('react-leaflet').then(({ MapContainer, TileLayer, Marker, Popup }) => {
      setMapComponents({ MapContainer, TileLayer, Marker, Popup })
    })

    const lat = 18.5018
    const lng = 73.8636
    setPosition([lat, lng])
  }, [])

  if (!mapComponents) {
    return <div className="h-[500px] w-full flex items-center justify-center bg-gray-100">Loading map...</div>
  }

  const { MapContainer, TileLayer, Marker, Popup } = mapComponents

  return (
    <div className="w-full h-[500px] relative">
      <MapContainer
        center={position}
        zoom={13}
        className="w-full h-full absolute"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker 
          position={position}
          icon={new L.Icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          })}
        >
          <Popup>
            Location: {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default RandomMap
