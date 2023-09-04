import Map from "./components/Map";
import { MapValuesProvider } from "./hooks/mapContextProvider";
function App() {
  return (
    <MapValuesProvider>
      <main>
        <img src="./pattern-bg-desktop.png" alt="a patterned background" />
        <Map />
      </main>
    </MapValuesProvider>
  );
}

export default App;
