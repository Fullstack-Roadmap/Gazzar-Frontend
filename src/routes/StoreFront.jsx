const StoreFront = () => {
  return (
    <>
      <nav className="flex justify-between items-center mx-40 my-8">
        <section className="flex justify-center aspect-square w-12 rounded-full bg-gray"></section>
        <ul className="flex justify-center gap-5">
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
        </ul>
        <section className="flex justify-center items-center gap-3">
          <div className="bg-gray flex h-fit justify-center items-center py-3 px-4 rounded-lg gap-3">
            <span className="w-5 bg-blue rounded-full aspect-square"></span>
            <input type="text" placeholder="search or type" className="bg-transparent focus:outline-none" />
          </div>
          <div className="rounded-full h-[3.25rem] aspect-square flex justify-center items-center border-[1px] border-gray"></div>
        </section>
      </nav>
    </>
  );
};

export default StoreFront;
