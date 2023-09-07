import { useMapContext } from "../context/mapContextProvider";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function MapComponent() {
  const { position } = useMapContext();
  // console.log(position);

  return (
    <div className="">
      <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Here's your location.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
