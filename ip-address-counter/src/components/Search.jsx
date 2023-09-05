function Search() {
  return (
    <div className="flex flex-col justify-between items-center w-8/12">
      <p className="text-white text-[18px] font-medium mb-2">IP Address Tracker</p>
      <section className="search-bar w-8/12 flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-8/12 h-12 rounded-l-md p-2 text-sm"
        />
        <button className="w-12 h-12 rounded-r-md bg-black text-white p-1.5 font-bold">
          &gt;
        </button>
      </section>
    </div>
  );
}

export default Search;
