const Overview = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 m-6 bg-blue/20 rounded-xl border-2 border-blue/40">
        <div className="flex gap-3 font-semibold">
          <img src="" alt="checkmark" />
          <div className="text-blue">Youre a few steps away from finishing</div>
        </div>
        <button className="bg-blue text-white py-4 px-10 rounded-lg font-semibold">
          Complete account setup
        </button>
      </div>
      <div className="m-10">
        <ul>
          <li className="border-2 rounded-xl border-gray p-5 w-fit flex">
            <img src="" alt="" />
            <div>
              <p className="font-semibold">No. of orders</p>
              <h1 className="text-4xl font-bold">17</h1>
            </div>
          </li>
        </ul>
        <section>
          <div>Amount made</div>
          <div>Top selling products</div>
        </section>
        <section>pending orders</section>
      </div>
    </>
  );
};

export default Overview;
