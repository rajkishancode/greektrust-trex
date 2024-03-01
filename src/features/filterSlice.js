import { createSlice } from "@reduxjs/toolkit";

const reducerFn = (prop) => {
  return (state, { payload }) => {
    console.log({ payload }, "in reducerfn");
    if (payload.checked) {
      state[prop] = [...state[prop], payload.name];
      console.log({ state }, "if");
    } else {
      state[prop] = state[prop].filter((item) => item !== payload.name);
      console.log({ state }, "else");
    }
  };
};

const initialState = {
  search: "",
  gender: [],
  color: [],
  priceRange: {
    min: "",
    max: "",
  },
  type: [],
};
console.log({ initialState });
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenderFilter: reducerFn("gender"),
    setColorFilter: reducerFn("color"),
    setTypeFilter: reducerFn("type"),
    setPriceFilter: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchFilter: (state, action) => {
      state.search = action.payload?.trim().toLowerCase();
    },
  },
});
export const {
  setColorFilter,
  setPriceFilter,
  setTypeFilter,
  setGenderFilter,
  setSearchFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
