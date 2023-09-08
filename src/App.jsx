import MapComponent from "./components/MapComponent";
import Overlay from "./components/Overlay";

function App() {
  return (
    <>
      <main className="bg-image relative bg-cover bg-no-repeat w-full h-72">
        <Overlay />
      </main>
      <MapComponent />
    </>
  );
}

export default App;
