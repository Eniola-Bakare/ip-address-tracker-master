import { createContext, useContext, useEffect, useState } from "react";
import { API_KEY } from "../constants";

const MapValuesContext = createContext();

function MapValuesProvider({ children }) {
  const [ipSearch, setIpSearch] = useState("");
  const [iPAddress, setIpAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const url = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;

  function setData(data) {
    if (data.code) return alert(data.messages);

    console.log(data);
    setIpAddress(data.ip);
    setTimeZone(data.location.timezone);
    setState(data.location.region);
    setCountry(data.location.country);
    setIsp(data.isp);
  }

  function fetchData(e) {
    if (ipSearch != "" && ipSearch != null) {
      fetch(`${url}&ipAddress=${ipSearch}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }
  useEffect(fetchData, []);
  return (
    <MapValuesContext.Provider
      value={{
        ipSearch,
        setIpSearch,
        iPAddress,
        state,
        country,
        timeZone,
        isp,
        fetchData,
      }}
    >
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
