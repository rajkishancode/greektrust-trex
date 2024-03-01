import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchFilter } from "../features/filterSlice";
import { useDispatch } from "react-redux";
import { useDebounce } from "../hooks";

export const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();

  const debouncedValue = useDebounce(searchValue, 500);
  useEffect(() => {
    dispatch(setSearchFilter(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className="border my-4 w-96 flex p-2 mx-auto ">
      <SearchIcon />
      <input
        className="w-96 outline-none"
        placeholder="Search for products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
