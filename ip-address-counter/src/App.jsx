import Map from "./components/Map";
import Overlay from "./components/Overlay";
import { MapValuesProvider } from "./hooks/mapContextProvider";
function App() {
  return (
    <MapValuesProvider>
      <main className="relative w-full">
        <img src="./pattern-bg-desktop.png" alt="a patterned background" />
        <Overlay />
      </main>
      <Map />
    </MapValuesProvider>
  );
}

export default App;
