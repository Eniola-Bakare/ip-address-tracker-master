import { createContext, useContext, useEffect, useState } from "react";
// import { API_KEY } from "../constants";

const MapValuesContext = createContext();

function MapValuesProvider({ children }) {
  const [ipSearch, setIpSearch] = useState("");
  const [iPAddress, setIpAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const [lat, setLat] = useState(31.9686);
  const [lng, setLng] = useState(99.9018);

  const url = `
  https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`;

  function setData(data) {
    if (data.code) return alert(data.messages);

    setIpAddress(data.ip);
    setTimeZone(data.location.timezone);
    setCity(data.location.city);
    setLat(data.location.lat);
    setLng(data.location.lng);
    setCountry(data.location.country);
    setIsp(data.isp);
  }

  function fetchData(e) {
    if (ipSearch != "" && ipSearch != null) {
      let search = ipSearch.substring(0, 7);
      if (isNaN(search)) {
        fetch(`${url}&domain=${ipSearch}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      } else if (!isNaN(search)) {
        fetch(`${url}&ipAddress=${ipSearch}`)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MapValuesContext.Provider
      value={{
        ipSearch,
        setIpSearch,
        iPAddress,
        city,
        country,
        timeZone,
        isp,
        fetchData,
        lat,
        lng,
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
