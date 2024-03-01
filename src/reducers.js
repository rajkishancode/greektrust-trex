import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productSlice";
import filtersReducer from "./features/filterSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  filters: filtersReducer,
});

export default rootReducer;
