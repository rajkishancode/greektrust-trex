import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  deleteFromCart,
  increment,
  decrement,
  clearCart,
} from "../features/cartSlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isCartEmpty = cart.length === 0;
  const totalAmount = cart?.reduce((acc, curr) => {
    return (acc += curr.product.price * curr.quantity);
  }, 0);

  useDocumentTitle("TeeRex | Cart");

  return (
    <div>
      <h1 className="text-3xl">Your Cart</h1>

      <section>
        {isCartEmpty ? (
          <div className="flex flex-col items-center">
            <span className="text-6xl">
              <InfoOutlinedIcon></InfoOutlinedIcon>
            </span>
            <span className="text-xl">Cart is Empty</span>

            <button
              className="bg-[#1976D2] text-white py-2 px-6 rounded-md shadow-lg mt-4"
              onClick={() => navigate("/products")}
            >
              SHOP NOW
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-2 lg:w-1/2 m-auto">
            {cart?.map((item) => (
              <div
                key={item?.product?.id}
                className="grid lg:grid-cols-4 justify-center items-center grid-cols-2 border p-2 gap-2"
              >
                <img src={item?.product?.imageURL} className="w-16" alt="" />
                <div className="flex flex-col items-start">
                  <span>
                    <b> {item?.product?.name} </b>
                  </span>
                  <span>
                    <b> {item?.product?.price} </b>
                  </span>
                </div>
                <div>
                  <span
                    onClick={() => {
                      if (item?.quantity >= 2) dispatch(decrement(item));
                    }}
                    className=" border py-1 px-2 pt-0 hover:cursor-pointer hover:bg-slate-300 rounded-2xl text-xl w-8"
                  >
                    -
                  </span>
                  {item?.quantity}
                  <span
                    onClick={() => dispatch(increment(item))}
                    className=" border py-1 px-2 pt-0 hover:cursor-pointer hover:bg-slate-300 rounded-2xl text-xl w-8"
                  >
                    +
                  </span>

                  <button
                    onClick={() => dispatch(deleteFromCart(item?.product?.id))}
                    className="border border-blue-700 rounded-sm px-2 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <h2 className="font-bold text-2xl">
              Total Price : ₹ {totalAmount}
            </h2>

            <button
              className="bg-[#1976D2] text-white py-2 px-6 rounded-md shadow-lg mb-2"
              onClick={() => {
                toast.success(
                  "Thanks for choosing us! Your order is on its way."
                );
                dispatch(clearCart());
              }}
            >
              COMPLETE SHOPPING
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
