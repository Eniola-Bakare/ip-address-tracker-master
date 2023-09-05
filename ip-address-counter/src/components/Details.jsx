function Details() {
  return (
    <div className="details-container flex gap-16 justify-between w-[60%] py-4 px-8 h-24 items-center  rounded-md bg-white shadow-lg shadow-black-500/50 ">
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">IP ADDRESS</p>
        <p className="text-base font-bold ">192.TEMP.174</p>
      </section>
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">LOCATION</p>
        <p className="text-base font-bold">TEMP.LOCATION</p>
      </section>
      <section className="detail-bloc border-r-2 pr-6 border-r-darkGray">
        <p className="text-xs font-bold text-darkGray">TIMEZONE</p>
        <p className="text-base font-bold">UTC.05:00</p>
      </section>
      <section className="detail-bloc">
        <p className="text-xs font-bold text-darkGray">ISP</p>
        <p className="text-base font-bold">SpaceX STarlink</p>
      </section>
    </div>
  );
}

export default Details;
