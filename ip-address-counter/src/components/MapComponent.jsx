import { useMapContext } from "../context/mapContextProvider";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function MapComponent() {
  const { lat, lng, city } = useMapContext();
  const mapPosition = [lat, lng];

  return (
    <div className="">
      <MapContainer center={mapPosition} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>This IP address is at {city || 'Temp.location'}.</Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default MapComponent;
