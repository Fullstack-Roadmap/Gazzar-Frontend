

const CartProductCard = () => {
  return (
    <div className="h-fit px-12 pb-6 rounded-xl border border-outlinegray flex">
        <div className="flex flex-col gap-5 w-1/4 mt-6">
            <div className="w-[6.375rem] h-[6.25rem] border text-center">Image</div>
            <span>Delete</span>
        </div>
        <div className="flex flex-col w-2/4 gap-3 mt-6">
            <span>Airforce 1's</span>
            <div className="flex gap-5">
                <span>Brand</span>
                <span>Variation</span>
            </div>
        </div>
        <div className="flex flex-col gap-3 w-1/4 mt-6">
            <span>N30,000</span>
            <span>Discount</span>
        </div>
    </div>
  )
}

export default CartProductCard