import { useMapContext } from "../context/mapContextProvider";

function Details() {
  const { iPAddress, city, country, timeZone, isp } = useMapContext();

  return (
    <div className="details-container flex items-center sm:justify-around flex-col sm:flex-row py-2 sm:py-4 sm:px-4 sm:h-24 sm:items-center  rounded-md bg-white shadow-lg shadow-black-500/50 z-50 w-9/12 sm:w-[85%] xl:w-[70%] ">
      <section className="detail-bloc flex flex-col w-[100%] items-center py-2 border-b sm:border-b-0 sm:border-r-2 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">IP ADDRESS</p>
        <p className="text-xs text-center md:text-base font-bold ">
          {iPAddress || "Temp.IP.ADDRESS"}
        </p>
      </section>
      <div className=""></div>
      <section className="detail-bloc flex flex-col w-[100%] items-center py-2 border-b  sm:border-b-0 sm:border-r-2 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">LOCATION</p>
        <p className="text-xs text-center md:text-base font-bold">
          {city || "TEMP.LOCATION"} - {country || "Country"}
        </p>
      </section>
      <section className="detail-bloc flex flex-col w-[100%] items-center py-2 border-b sm:border-b-0 sm:border-r-2 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">TIMEZONE</p>
        <p className="text-xs text-center md:text-base font-bold">
          {timeZone || "UTC.05:00"}
        </p>
      </section>
      <section className="detail-bloc flex flex-col w-[100%] items-center py-2">
        <p className="text-xs font-bold text-darkGray">ISP</p>
        <p className="text-xs text-center md:text-base font-bold">{isp || "ISP"}</p>
      </section>
    </div>
  );
}

export default Details;
