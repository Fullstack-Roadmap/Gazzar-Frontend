import cart from "../assets/svgs/cart.svg"
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
      <div className="m-6">
        <ul>
          <li className="border-[1px] rounded-xl border-gray p-6 w-fit flex gap-3">
            <div className="flex justify-center items-center bg-blue/20 rounded-full p-5"><img src={cart} alt="cart" /></div>
            <div>
              <p className="font-bold">No. of orders</p>
              <h1 className="text-4xl font-bold">17</h1>
            </div>
          </li>
        </ul>
        <section className="my-6">
          <div>Amount made</div>
          <div>Top selling products</div>
        </section>
        <section>pending orders</section>
      </div>
    </>
  );
};

export default Overview;
