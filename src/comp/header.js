function Head() {
  return (
    <div className="z-10 absolute left-20 top-32">
      <p className="text-white text-6xl font-bold">Explore</p>
      <p className="text-white text-6xl font-thin">
        your amazing city together
      </p>
      <div className="mt-10">
        <p className="text-white text-lg">Find great places to holiday</p>
        <div>
          <input type="text" className="rounded-l-lg w-[1050px] border-none" />
          <button className="rounded-r-lg px-5 py-2 text-white bg-[#FFAF00]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default Head;
