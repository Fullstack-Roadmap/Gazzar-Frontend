const Overview = () => {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 m-5 bg-blue/30 rounded-lg">
        <div className="flex gap-3">
          <img src="" alt="checkmark" />
          <div className="text-blue">Youre a few steps away from finishing</div>
        </div>
        <button className="bg-blue text-white p-5 rounded-lg">
          Complete account setup
        </button>
      </div>
      <div className="m-10">
        <ul></ul>
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
