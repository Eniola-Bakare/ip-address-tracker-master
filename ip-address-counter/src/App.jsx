import Map from "./components/Map";
import Overlay from "./components/Overlay";
import { MapValuesProvider } from "./context/mapContextProvider";
function App() {
  return (
    <MapValuesProvider>
      <main className="bg-image relative bg-cover bg-no-repeat w-full h-72">
        <Overlay />
      </main>
      <Map />
    </MapValuesProvider>
  );
}

export default App;
