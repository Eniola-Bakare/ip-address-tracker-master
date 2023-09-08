import Details from "./Details";
import Search from "./Search";

function Overlay() {
  return (
    <div className="flex flex-col gap-10 items-center w-full absolute -bottom-28 sm:absolute sm:-bottom-12 ">
      <Search />
      <Details />
    </div>
  );
}

export default Overlay;
