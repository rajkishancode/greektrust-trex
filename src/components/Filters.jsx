import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { getUniqueItems } from "../utils/helper";
import { useDebounce } from "../hooks";
import toast from "react-hot-toast";
import {
  setColorFilter,
  setPriceFilter,
  setTypeFilter,
  setGenderFilter,
} from "../features/filterSlice";

export const Filters = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const allColours = getUniqueItems("color", products);
  const allGenders = getUniqueItems("gender", products);
  const allTypes = getUniqueItems("type", products);

  const [price, setPriceRange] = useState([0, 500]);
  const debounceValue = useDebounce(price, 500);

  const minMax = products?.reduce(
    (acc, curr) => {
      if (curr.price < acc.min) {
        return { ...acc, min: curr.price };
      } else if (curr.price > acc.max) {
        return { ...acc, max: curr.price };
      } else return acc;
    },
    { min: 0, max: 0 }
  );

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  useEffect(() => {
    dispatch(setPriceFilter({ min: price[0], max: price[1] }));
  }, [debounceValue[0], debounceValue[1]]);

  function valuetext(value) {
    return `Rs. ${value}`;
  }
  return (
    <div className="shadow-xl pl-3 flex flex-col gap-1 p-5">
      <p className="flex flex-col items-start ">
        <h3 className="font-bold text-lg">Price</h3>
        <Box sx={{ width: 150 }}>
          <Slider
            max={minMax?.max}
            min={minMax?.min}
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <div className="my-1 flex justify-between ">
            <span>₹{price[0]}</span>
            <span>₹{price[1]}</span>
          </div>
        </Box>
      </p>
      <section className="flex flex-col ">
        <h3 className="font-bold text-lg">Colours</h3>
        <ul>
          {allColours?.map((item) => (
            <li className="flex gap-2 my-1 mx-3">
              <input
                type="checkbox"
                name={item}
                onChange={(e) => dispatch(setColorFilter(e.target))}
              />

              <label key={item} className="">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col ">
        <h3 className="font-bold text-lg">Gender</h3>
        <ul>
          {allGenders?.map((item) => (
            <li className="flex gap-2 my-1 mx-3">
              <input
                type="checkbox"
                name={item}
                onChange={(e) => dispatch(setGenderFilter(e.target))}
              />

              <label key={item} className="">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col ">
        <h3 className="font-bold text-lg">Type</h3>
        <ul>
          {allTypes?.map((item) => (
            <li className="flex gap-2 my-1 mx-3" key={item}>
              <input
                type="checkbox"
                name={item}
                onChange={(e) => dispatch(setTypeFilter(e.target))}
              />

              <label key={item} className="">
                {item}
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
