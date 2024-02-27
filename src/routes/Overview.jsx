const Overview = () => {
  return (
    <>
      <div className="flex p-5 bg-blue/50 rounded-lg">
        <img src="" alt="checkmark" />
        <div className="text-blue">Youre a few steps away from finishing</div>
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
