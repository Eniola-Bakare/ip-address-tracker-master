import { useMapContext } from "../context/mapContextProvider";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function MapComponent() {
  const { lat, lng, city } = useMapContext();
  const mapPosition = [lat, lng];

  const customIcon = new Icon({
    iconUrl: "/location-pin.png",
    iconSize: [38, 38],
  });

  return (
    <div className="">
      <MapContainer center={mapPosition} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={customIcon}>
          <Popup>This IP address is at {city || "Temp.location"}.</Popup>
        </Marker>

        <ChangeCenter position={[lat || 40, lng || 0]} />
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
