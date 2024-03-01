import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      toast.success(`${action.payload.name} is added to your cart`);
      return [...state, { product: action.payload, quantity: 1 }];
    },
    deleteFromCart: (state, action) => {
      toast.success("Product deleted from cart.");
      return state.filter((item) => item.product.id !== action.payload);
    },
    increment: (state, action) => {
   
      const foundItem = state.find((item) => item.product.id === action.payload.product.id);
      if (foundItem && foundItem.quantity < action.payload.product.quantity) {
        return state.map((item) =>
          item.product.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.error(
          `You can not add more than ${action.payload.product.quantity} items of this product`
        );
      }
      return state;
    },
    decrement: (state, action) => {
      
      toast.success(`Quantity has been decreased.`);
      return state.map((item) =>
        item.product.id === action.payload.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    },
    clearCart: () => [],
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, increment, decrement, clearCart } =
  cartSlice.actions;
