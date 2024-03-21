import { useDispatch, useSelector } from "react-redux";
import ResturantCategoryList from "./ResturantCategoryList";
import { emptyItems } from "./utilis/cartSlice";

        const Cart = () => {

            const dispatchClear = useDispatch();
            const deleteCart = () => {
                dispatchClear(emptyItems());
            }
            const cartItems = useSelector((store) => store.cart.item)

            return <div className="m-4 p-4 w-9/12 m-auto text-center">
                <h1 className="m-2 align-middle text-xl font-bold"> Cart Page </h1>
                <button className="m-2 p-2 rounded-lg bg-customPink text-white"
                onClick={deleteCart}
                >Clear Cart</button>
                <ResturantCategoryList dataList={cartItems} />
                {cartItems.length === 0 &&
                <h2>Your Cart is empty, add something you like...</h2>
                }
            </div>
        }

        export default Cart; 