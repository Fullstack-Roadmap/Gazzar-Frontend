import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  return (
      <div className="h-fit mt-16 px-12 pb-16 rounded-xl border border-outlinegray mx-40">
        <h3 className="text-4xl font-extrabold mt-4 ml-12">Cart</h3>
        <div className="flex gap-12">
          <div className="flex flex-col w-2/3 gap-6 mt-12">
            <CartProductCard />
            <CartProductCard />
          </div>
          <div className="w-1/3 border">

          </div>
        </div>
      </div>
  )
}

export default Cart
