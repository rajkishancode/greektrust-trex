import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../features/cartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isItemPresentInCart = cart.find(
    (item) => item.product.id === product.id
  );
  const toggleCartItem = () =>
    isItemPresentInCart
      ? dispatch(deleteFromCart(product.id))
      : dispatch(addToCart(product));

  return (
    <div className="border border-black w-60 p-4 flex flex-col gap-2 my-2">
      <section className="relative">
        <img
          className="h-56 w-56 border border-blue-200 "
          src={product?.imageURL}
          alt=""
        />
        <span className="absolute right-0 top-0 text-black font-bold border bg-slate-100">
          {product?.name}
        </span>
      </section>

      <section className="flex justify-between items-center">
        <p>₹{product?.price}</p>
        <button
          onClick={toggleCartItem}
          className="bg-[#383837] text-white p-2 px-4 rounded-md"
        >
          {isItemPresentInCart ? "Remove" : "Add to cart"}
        </button>
      </section>
    </div>
  );
};
