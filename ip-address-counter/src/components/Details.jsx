import { useMapContext } from "../context/mapContextProvider";

function Details() {
  const { iPAddress, city, country, timeZone, isp } = useMapContext();

  return (
    <div className="details-container flex gap-16 justify-center w-[60%] py-4 px-4 h-24 items-center  rounded-md bg-white shadow-lg shadow-black-500/50 z-50 ">
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">IP ADDRESS</p>
        <p className="text-base font-bold ">{iPAddress || "192.TEMP.674"}</p>
      </section>
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">LOCATION</p>
        <p className="text-base font-bold">
          {city || "TEMP.LOCATION"} - {country || "Country"}
        </p>
      </section>
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">TIMEZONE</p>
        <p className="text-base font-bold">{timeZone || "UTC.05:00"}</p>
      </section>
      <section className="detail-bloc">
        <p className="text-xs font-bold text-darkGray">ISP</p>
        <p className="text-base font-bold">{isp || "ISP"}</p>
      </section>
    </div>
  );
}

export default Details;
