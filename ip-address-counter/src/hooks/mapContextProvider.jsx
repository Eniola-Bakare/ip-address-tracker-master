import { createContext, useContext, useState } from "react";

const MapValuesContext = createContext();

function MapValuesProvider({ children }) {
  const [ipSearch, setIpSearch] = useState("");

  return (
    <MapValuesContext.Provider value={{ ipSearch, setIpSearch }}>
      {children}
    </MapValuesContext.Provider>
  );
}

function useMapContext() {
  const values = useContext(MapValuesContext);
  if (!values) return;

  return values;
}
export { MapValuesProvider, useMapContext };
